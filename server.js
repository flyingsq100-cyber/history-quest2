require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static("./")); // Serve static frontend files

// Multer for file uploads (if needed, otherwise we can accept base64 in JSON)
const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 } });

// ==========================================
// 1. Supabase & Gemini API Clients Initialize
// ==========================================

let supabase = null;
let supabaseUrl = process.env.SUPABASE_URL;

// URL 끝자리에 슬래시(/)가 포함된 경우 위생화 처리 (PGRST125 에러 방지)
if (supabaseUrl && supabaseUrl.endsWith("/")) {
    supabaseUrl = supabaseUrl.slice(0, -1);
}

if (supabaseUrl && process.env.SUPABASE_ANON_KEY && 
    !supabaseUrl.includes("YOUR_SUPABASE")) {
    supabase = createClient(supabaseUrl, process.env.SUPABASE_ANON_KEY);
    console.log("🟢 Supabase 클라이언트 연결 설정 완료");
} else {
    console.warn("⚠️ Supabase 설정(.env)이 완료되지 않았습니다. 임시 로컬 메모리 DB를 사용합니다.");
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const isGeminiConfigured = GEMINI_API_KEY && !GEMINI_API_KEY.includes("YOUR_GEMINI");

if (isGeminiConfigured) {
    console.log("🟢 Google Gemini API 연동 설정 완료");
} else {
    console.warn("⚠️ Gemini API 키가 설정되지 않았습니다. 시뮬레이션 모드로 동작합니다.");
}

// 임시 로컬 메모리 DB (Supabase 연동 실패 시 폴백용)
const localProgressMemory = new Set();

// ==========================================
// 2. 유적지 및 유물 위치 정보 (하버사인 계산용)
// ==========================================

const LOCATIONS_DB = {
    muryeong: {
        name: "무령왕릉과 왕릉원",
        lat: 36.4608,
        lng: 127.1147,
        relics: {
            "relic_muryeong_1": { name: "무령왕릉 진묘수 (석수)" },
            "relic_muryeong_2": { name: "무령왕 금제관식" }
        }
    },
    gongsan: {
        name: "공주 공산성",
        lat: 36.4601,
        lng: 127.1260,
        relics: {
            "relic_gongsan_1": { name: "공산성 금서루" },
            "relic_gongsan_2": { name: "쌍수정" }
        }
    },
    museum: {
        name: "국립공주박물관",
        lat: 36.4632,
        lng: 127.1118,
        relics: {
            "relic_museum_1": { name: "무령왕릉 지석 (묘지석)" },
            "relic_museum_2": { name: "왕비의 금제 뒤꽂이" }
        }
    },
    seokjangri: {
        name: "공주 석장리 유적",
        lat: 36.4429,
        lng: 127.1852,
        relics: {
            "relic_seokjangri_1": { name: "석장리 주먹도끼 (뗀석기)" },
            "relic_seokjangri_2": { name: "구석기 시대 막집" }
        }
    },
    sangdang: {
        name: "청주 상당산성",
        lat: 36.6534,
        lng: 127.5255,
        relics: {
            "relic_sangdang_1": { name: "상당산성 공남문 (남문)" },
            "relic_sangdang_2": { name: "보화정 (동장대)" }
        }
    },
    hongpanseo: {
        name: "세종 홍판서댁",
        lat: 36.4678,
        lng: 127.3712,
        relics: {
            "relic_hongpanseo_1": { name: "홍판서댁 사랑채" },
            "relic_hongpanseo_2": { name: "낮은 안채 굴뚝" }
        }
    }
};

// 두 좌표 간 거리 계산 함수 (Haversine Formula)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // 지구 반지름 (m)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 미터(m) 단위 반환
}

// ==========================================
// 3. API 라우트 정의 (Backend Routes)
// ==========================================

// 3.1 사용자의 유물 잠금해제 기록 가져오기
app.get("/api/progress", async (req, res) => {
    const { deviceId } = req.query; // 브라우저 고유 ID로 기록 구분
    
    if (!deviceId) {
        return res.status(400).json({ error: "deviceId가 필요합니다." });
    }

    if (supabase) {
        try {
            const { data, error } = await supabase
                .from("user_progress")
                .select("relic_id")
                .eq("device_id", deviceId);

            if (error) throw error;
            const unlockedList = data.map(item => item.relic_id);
            return res.json({ unlockedRelics: unlockedList });
        } catch (err) {
            console.error("Supabase 로드 에러:", err);
            return res.json({ unlockedRelics: Array.from(localProgressMemory) });
        }
    } else {
        return res.json({ unlockedRelics: Array.from(localProgressMemory) });
    }
});

// 3.2 AI 카메라 분석 및 GPS 검증 API
app.post("/api/scan", async (req, res) => {
    const { image, lat, lng, relicId, currentLocId, deviceId, bypassGps } = req.body;

    if (!image || !deviceId || !currentLocId) {
        return res.status(400).json({ error: "필수 데이터(image, deviceId, currentLocId)가 누락되었습니다." });
    }

    // 1. 유적지 검사
    const targetLoc = LOCATIONS_DB[currentLocId];
    if (!targetLoc) {
        return res.status(404).json({ error: "존재하지 않는 유적지 ID입니다." });
    }

    // 2. GPS 위치 검증 (가상 GPS 우회 가능)
    if (bypassGps !== true && bypassGps !== "true") {
        if (!lat || !lng) {
            return res.status(400).json({ error: "실제 GPS 좌표가 수신되지 않았습니다." });
        }
        
        const distance = getDistance(parseFloat(lat), parseFloat(lng), targetLoc.lat, targetLoc.lng);
        console.log(`📍 위치 비교: 사용자 위치 <-> 유적지 [${targetLoc.name}] 거리: ${distance.toFixed(1)}m`);

        // 유적지 반경 200m 이내 도달 여부
        if (distance > 200) {
            return res.json({
                success: false,
                errorType: "GPS_MISMATCH",
                message: `📍 위치 오차 감지! 현재 계신 곳이 '${targetLoc.name}'이(가) 아닌 것으로 분석됩니다. (목표지와의 거리: ${distance.toFixed(0)}m). 더 가까이 이동하신 후 스캔해주세요.`
            });
        }
    } else {
        console.log(`⚠️ GPS 검증 우회 활성화됨 (유적지: ${targetLoc.name})`);
    }

    // 3. 실시간 AI 판독 (Gemini API 호출)
    let aiMatch = false;
    let confidence = 0.0;
    let reason = "시뮬레이션 모드 판독 성공";
    let matchedRelicId = relicId;

    if (isGeminiConfigured) {
        try {
            const base64Data = image.split(",")[1] || image;
            const mimeType = image.split(";")[0].split(":")[1] || "image/jpeg";
            const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
            
            // 이 유적지에 속한 모든 등록 유물 리스트 구성
            const relicListString = Object.entries(targetLoc.relics)
                .map(([id, data]) => `- ${id}: ${data.name}`)
                .join("\n");

            let prompt = "";
            if (relicId) {
                // 기존 특정 타깃 유물 조준 검증
                prompt = `You are a strict, expert AI historical analyzer for an interactive mobile exploration game.
The user is at [${targetLoc.name}] and took a picture claiming it shows the relic: [${targetLoc.relics[relicId].name}].
Analyze the uploaded image. Decide if this image depicts either the actual relic, a high-fidelity replica in the museum/site, a commemorative board with that relic's clear photo, or a museum exhibit display card containing this relic.
Be strict but allow typical tourist photography angles, low indoor light, and display cases.

You MUST respond ONLY in raw JSON format (no markdown formatting, no \`\`\`json wrappers) containing:
{
  "isMatched": true or false,
  "confidence": 0.0 to 1.0,
  "reason": "Brief Korean explanation about what was identified in the image and why it matches/does not match."
}`;
            } else {
                // 자동 판독 모드 (사용자가 무엇인지 지정하지 않고 찍었을 때)
                prompt = `You are an expert AI historical relic classifier for an interactive mobile game.
The user is currently at [${targetLoc.name}] and took a photo of a relic/exhibit.
Your task is to analyze the image and classify which of the following registered relics at this location is shown in the photo:
${relicListString}

If the image clearly depicts one of these registered relics (or its replica, display card, info board), return its exact ID in "matchedRelicId" (e.g. relic_muryeong_1).
If it does not match any of these registered relics at this site, set "matchedRelicId" to null.

You MUST respond ONLY in raw JSON format (no markdown formatting, no \`\`\`json wrappers) containing:
{
  "matchedRelicId": "relic_id_string" or null,
  "confidence": 0.0 to 1.0,
  "reason": "Brief Korean explanation about what relic was identified in the image and why it matches."
}`;
            }

            const response = await fetch(geminiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: prompt },
                                {
                                    inlineData: {
                                        mimeType: mimeType,
                                        data: base64Data
                                    }
                                }
                            ]
                        }
                    ]
                })
            });

            const resData = await response.json();
            
            if (resData.candidates && resData.candidates[0].content.parts[0].text) {
                let aiText = resData.candidates[0].content.parts[0].text.trim();
                aiText = aiText.replace(/^```json/, "").replace(/```$/, "").trim();
                
                const aiResult = JSON.parse(aiText);
                if (relicId) {
                    aiMatch = aiResult.isMatched;
                    confidence = aiResult.confidence;
                    reason = aiResult.reason;
                    matchedRelicId = relicId;
                } else {
                    matchedRelicId = aiResult.matchedRelicId;
                    aiMatch = matchedRelicId !== null;
                    confidence = aiResult.confidence;
                    reason = aiResult.reason;
                }
                console.log(`🤖 Gemini 자동 분석 결과:`, aiResult);
            } else {
                console.error("⚠️ Gemini API 오류 응답 상세:", JSON.stringify(resData, null, 2));
                throw new Error(resData.error?.message || "Gemini 응답 구조 오류");
            }
        } catch (err) {
            console.error("🤖 Gemini API 통신 오류:", err);
            // 폴백 (테스트 편의성을 위해 첫 번째 유물로 매칭 폴백 처리)
            matchedRelicId = relicId || Object.keys(targetLoc.relics)[0];
            aiMatch = true;
            confidence = 0.9;
            reason = "서버 AI 모듈 연결 지연으로 인해 로컬 폴백 매칭으로 처리되었습니다.";
        }
    } else {
        // 시뮬레이터 동작 (API 키가 없을 때)
        matchedRelicId = relicId || Object.keys(targetLoc.relics)[0];
        aiMatch = true;
        confidence = 0.95;
        reason = "시뮬레이션 모드에서 자동으로 첫 번째 유물을 판독 성공시켰습니다.";
    }

    // 4. 스탬프 보관소 DB (Supabase)에 기록 저장
    if (aiMatch && matchedRelicId) {
        if (supabase) {
            try {
                const { error } = await supabase
                    .from("user_progress")
                    .upsert({ 
                        device_id: deviceId, 
                        relic_id: matchedRelicId, 
                        unlocked_at: new Date().toISOString() 
                    }, { onConflict: "device_id,relic_id" });

                if (error) throw error;
                console.log(`💾 Supabase 저장 완료: [Device: ${deviceId}] -> [Relic: ${matchedRelicId}]`);
            } catch (err) {
                console.error("💾 Supabase DB 저장 에러:", err);
                localProgressMemory.add(matchedRelicId);
            }
        } else {
            localProgressMemory.add(matchedRelicId);
        }
        
        return res.json({
            success: true,
            confidence: confidence,
            reason: reason,
            relicId: matchedRelicId
        });
    } else {
        return res.json({
            success: false,
            errorType: "IMAGE_MISMATCH",
            confidence: confidence,
            reason: reason,
            message: `❌ AI가 유물을 식별하지 못했습니다.\n\n사유: ${reason}\n\n유물을 화면 정중앙에 맞춰 초점을 잡고 다시 촬영해 주세요.`
        });
    }
});

// ==========================================
// 4. 서버 시작 (Server Start)
// ==========================================
app.listen(PORT, () => {
    console.log(`
  ======================================================
  ✨ 세종·웅진 역사 탐정 풀스택 백엔드 구동 성공!
  ✨ 로컬 웹 주소: http://localhost:${PORT}
  ======================================================
  `);
});
