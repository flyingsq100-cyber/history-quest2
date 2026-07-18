// ==========================================
// 1. 유적지 및 유물 데이터베이스 (Locations & Relics Database)
// ==========================================

const LOCATIONS_DB = {
    muryeong: {
        id: "muryeong",
        name: "👑 무령왕릉과 왕릉원",
        desc: "백제 25대 무령왕과 왕비의 무덤으로, 도굴되지 않은 채 고스란히 발견되어 백제 미술의 정수를 담고 있는 국보급 무덤입니다.",
        gps: { lat: 36.4608, lng: 127.1147 },
        relics: [
            {
                id: "relic_muryeong_1",
                name: "무령왕릉 진묘수 (석수)",
                hint: "왕릉 입구에서 악귀를 막고 있었던 멧돼지를 닮은 상상의 동물 조각을 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <path d="M25,65 Q35,45 55,45 Q75,45 80,60 Q85,75 75,80 Q55,80 35,80 Z" fill="#64748b" stroke="#334155" stroke-width="2"/>
                        <path d="M15,55 Q15,40 25,45 Q35,50 30,65 Q25,75 15,65 Z" fill="#64748b" stroke="#334155" stroke-width="2"/>
                        <path d="M22,42 L18,25 L28,38 Z" fill="#d4af37" stroke="#aa7c11" stroke-width="1.5"/>
                        <line x1="35" y1="80" x2="30" y2="92" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
                        <line x1="45" y1="80" x2="45" y2="92" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
                        <line x1="65" y1="80" x2="68" y2="86" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/> 
                        <line x1="75" y1="80" x2="80" y2="92" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
                        <circle cx="16" cy="58" r="4" fill="#475569"/>
                        <circle cx="23" cy="52" r="2.5" fill="#facc15"/>
                        <path d="M45,45 Q50,30 55,45" fill="none" stroke="#d4af37" stroke-width="2"/>
                      </svg>`,
                official: "무령왕릉 진묘수(국보 제162호)는 무덤을 수호하고 사자의 영혼을 저승으로 인도하는 역할을 가진 돌짐승입니다. 중국의 묘장 풍습에서 유래했으나 백제만의 독창적인 조형미로 재해석되었습니다.",
                legend: "무령왕릉이 처음 발굴되었을 때 이 진묘수는 약 1,500년 동안 왕릉 입구를 지키고 있었습니다. 특이하게도 뒷다리 하나가 부러져 있었는데, 백제인들이 이 영험한 신수가 왕의 무덤을 지키지 않고 밖으로 달아날까 염려하여 일부러 뒷다리를 부러뜨려 무덤 안에 머물도록 했다는 흥미로운 야사가 전해 내려옵니다."
            },
            {
                id: "relic_muryeong_2",
                name: "무령왕 금제관식",
                hint: "왕의 관에 장식했던, 마치 불꽃이 피어오르는 듯한 기품 넘치는 황금 장식을 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <path d="M50,90 C50,60 45,35 50,15 C55,35 50,60 50,90" fill="#facc15" stroke="#d4af37" stroke-width="1.5"/>
                        <path d="M50,75 C30,70 20,55 35,50 C45,47 47,60 50,75" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <path d="M50,55 C25,50 15,30 30,25 C42,22 45,40 50,55" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <path d="M50,35 C35,30 25,15 35,10 C42,8 45,25 50,35" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <path d="M50,75 C70,70 80,55 65,50 C55,47 53,60 50,75" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <path d="M50,55 C75,50 85,30 70,25 C58,22 55,40 50,55" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <path d="M50,35 C65,30 75,15 65,10 C58,8 55,25 50,35" fill="#facc15" stroke="#d4af37" stroke-width="1"/>
                        <circle cx="30" cy="52" r="3" fill="#fbbf24"/>
                        <circle cx="70" cy="52" r="3" fill="#fbbf24"/>
                        <circle cx="28" cy="27" r="3" fill="#fbbf24"/>
                        <circle cx="72" cy="27" r="3" fill="#fbbf24"/>
                        <circle cx="32" cy="12" r="2" fill="#fbbf24"/>
                        <circle cx="68" cy="12" r="2" fill="#fbbf24"/>
                        <path d="M35,90 L65,90 L50,95 Z" fill="#d4af37"/>
                      </svg>`,
                official: "무령왕 금제관식(국보 제154호)은 왕의 관에 장식하던 순금 장식품 한 쌍입니다. 불꽃이나 연꽃, 인동초가 타오르는 형상으로 매우 정교하게 가공되었으며 영롱한 빛을 내는 금알갱이들이 매달려 있습니다.",
                legend: "무령왕의 황금 관식은 불교적 정토 사상과 백제의 뛰어난 금속공예 기술이 어우러진 최고의 유물입니다. 야사에서는 왕이 중요한 하례에 이 관을 쓸 때마다 불꽃 같은 형상에서 뿜어져 나오는 빛이 사악한 생각을 가진 신하들의 마음을 비추어 반역을 꿈꾸지 못하도록 방어막 역할을 했다는 신비로운 속설이 전해집니다."
            }
        ]
    },
    gongsan: {
        id: "gongsan",
        name: "🏰 공주 공산성",
        desc: "백제 웅진 시대(475~538년)를 지키던 왕성으로, 금강을 품은 천혜의 요새이자 유네스코 세계문화유산입니다.",
        gps: { lat: 36.4601, lng: 127.1260 },
        relics: [
            {
                id: "relic_gongsan_1",
                name: "공산성 금서루",
                hint: "공산성의 서쪽에 위치한 누각으로, 굳건하게 성벽의 입구를 지키고 있는 관문을 촬영하세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <path d="M10,85 L90,85 L85,60 L15,60 Z" fill="#4b5563" stroke="#1f2937" stroke-width="1.5"/>
                        <path d="M40,85 C40,70 60,70 60,85 Z" fill="#111827"/>
                        <rect x="25" y="45" width="50" height="15" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.5"/>
                        <line x1="30" y1="60" x2="30" y2="45" stroke="#fdba74" stroke-width="3"/>
                        <line x1="50" y1="60" x2="50" y2="45" stroke="#fdba74" stroke-width="3"/>
                        <line x1="70" y1="60" x2="70" y2="45" stroke="#fdba74" stroke-width="3"/>
                        <path d="M20,46 Q50,32 80,46 L75,38 Q50,28 25,38 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
                        <line x1="18" y1="60" x2="18" y2="35" stroke="#4b5563" stroke-width="1.5"/>
                        <polygon points="18,35 8,40 18,45" fill="#facc15"/>
                        <line x1="82" y1="60" x2="82" y2="35" stroke="#4b5563" stroke-width="1.5"/>
                        <polygon points="82,35 92,40 82,45" fill="#facc15"/>
                      </svg>`,
                official: "금서루는 공산성의 4대 성문 중 서쪽 문으로, 성안으로 출입하는 가장 대표적인 통로입니다. 조선 시대에 성벽 양식으로 재건되어 백제와 조선의 건축미를 고루 감상할 수 있습니다.",
                legend: "공산성에는 백제가 나당연합군에 무너질 당시, 이곳을 마지막으로 수호하던 군사들의 혼이 담긴 전설이 있습니다. 밤마다 금서루 주변을 지키는 유령 백제 군사들의 순찰 행렬이 목격된다는 괴담이 있었으며, 임진왜란 때 왜군들이 공산성에 진입하려다 금서루 주변을 감싸는 알 수 없는 거센 안개와 도깨비불에 질려 퇴각했다는 이야기가 민간에 전해집니다."
            },
            {
                id: "relic_gongsan_2",
                name: "쌍수정",
                hint: "조선 시대 인조 임금이 이괄의 난을 피해 공산성에 머물며 의지했던 두 개의 나무가 있던 자리에 세워진 정자를 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <rect x="25" y="75" width="50" height="10" fill="#64748b" rx="2"/>
                        <line x1="30" y1="75" x2="30" y2="45" stroke="#991b1b" stroke-width="3.5"/>
                        <line x1="43" y1="75" x2="43" y2="45" stroke="#991b1b" stroke-width="3"/>
                        <line x1="57" y1="75" x2="57" y2="45" stroke="#991b1b" stroke-width="3"/>
                        <line x1="70" y1="75" x2="70" y2="45" stroke="#991b1b" stroke-width="3.5"/>
                        <rect x="28" y="42" width="44" height="6" fill="#10b981"/>
                        <path d="M15,44 Q50,22 85,44 L80,33 Q50,15 20,33 Z" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
                        <path d="M15,75 Q8,60 12,45 C15,35 25,45 22,60" fill="none" stroke="#065f46" stroke-width="2"/>
                        <path d="M85,75 Q92,60 88,45 C85,35 75,45 78,60" fill="none" stroke="#065f46" stroke-width="2"/>
                      </svg>`,
                official: "쌍수정은 1624년 이괄의 난을 피해 공산성으로 파천했던 조선의 인조 임금을 기리기 위해 지은 정자입니다. 인조는 난이 평정되기를 기다리는 동안 이곳의 두 소나무에 의지하며 한숨을 돌렸다고 전해집니다.",
                legend: "인조는 공산성에 머물며 불안해하다 반란이 진압되었다는 첩보를 들은 후 기쁜 나머지, 자신이 의지하고 기대어 서 있던 두 소나무(쌍수)에 직접 정3품 통정대부라는 벼슬을 내렸습니다. 이후 나무가 늙어 죽자 그 자리에 세운 정자가 지금의 쌍수정인데, 기이하게도 정자가 완공된 날 밤 정자 주변에서 소나무 두 그루가 푸르게 빚을 내며 기쁨의 소리를 냈다는 야사가 있습니다."
            }
        ]
    },
    museum: {
        id: "museum",
        name: "🏛️ 국립공주박물관",
        desc: "무령왕릉 출토 유물을 비롯해 충청남도 지역의 구석기 시대부터 조선 시대까지의 문화재를 보존하는 역사 보물창고입니다.",
        gps: { lat: 36.4632, lng: 127.1118 },
        relics: [
            {
                id: "relic_museum_1",
                name: "무령왕릉 지석 (묘지석)",
                hint: "왕릉 입구에서 왕의 신원과 무덤 터를 땅의 신에게 샀음을 기록한 네모난 돌판을 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <rect x="20" y="20" width="60" height="60" fill="#78716c" stroke="#44403c" stroke-width="3" rx="4"/>
                        <line x1="30" y1="32" x2="70" y2="32" stroke="#292524" stroke-dasharray="3, 3" stroke-width="2"/>
                        <line x1="30" y1="42" x2="70" y2="42" stroke="#292524" stroke-dasharray="2, 4" stroke-width="2"/>
                        <line x1="30" y1="52" x2="70" y2="52" stroke="#292524" stroke-dasharray="4, 2" stroke-width="2"/>
                        <line x1="30" y1="62" x2="70" y2="62" stroke="#292524" stroke-dasharray="3, 3" stroke-width="2"/>
                        <line x1="30" y1="72" x2="70" y2="72" stroke="#292524" stroke-dasharray="1, 4" stroke-width="2"/>
                        <circle cx="50" cy="74" r="5" fill="#d4af37" stroke="#aa7c11"/>
                        <rect x="48.5" y="72.5" width="3" height="3" fill="#78716c"/>
                      </svg>`,
                official: "무령왕릉 지석(국보 제163호)은 삼국시대 고분 중 피장자의 신원을 유일하게 확실히 증명해 준 돌판입니다. 여기에는 왕이 토지신(토왕)에게 돈을 주고 무덤 터를 구매했다는 매지문(買地文)이 새겨져 있습니다.",
                legend: "무덤 터를 지하 세계의 신에게 사기 위해 돌판 위에 '오수전(동전)' 꾸러미를 같이 놓아두었는데, 이 지석을 발굴하는 순간 지하 세계로 통하는 봉인이 깨지며 무덤 내부를 채우고 있던 백제 시대의 공기가 쉭 소리를 내며 나갔고, 발굴자 중 일부가 백제 왕릉의 신비로운 향기를 맡았다는 일화가 전해집니다."
            },
            {
                id: "relic_museum_2",
                name: "왕비의 금제 뒤꽂이",
                hint: "날개를 활짝 편 새의 모습을 형상화하여 머리를 화려하게 장식했던 황금 뒤꽂이를 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <line x1="50" y1="90" x2="50" y2="40" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
                        <line x1="45" y1="85" x2="45" y2="45" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
                        <line x1="55" y1="85" x2="55" y2="45" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
                        <path d="M50,40 Q50,20 65,15 Q55,30 50,40" fill="#facc15" stroke="#d4af37"/>
                        <path d="M50,40 Q50,20 35,15 Q45,30 50,40" fill="#facc15" stroke="#d4af37"/>
                        <path d="M50,30 C30,10 70,10 50,30" fill="none" stroke="#d4af37" stroke-width="1.5"/>
                        <circle cx="50" cy="18" r="3.5" fill="#facc15" stroke="#d4af37"/>
                        <circle cx="38" cy="22" r="2" fill="#fbbf24"/>
                        <circle cx="62" cy="22" r="2" fill="#fbbf24"/>
                      </svg>`,
                official: "왕비의 금제 뒤꽂이(국보 제159호)는 머리를 장식하는 비녀의 일종으로, 날개를 활짝 펴고 날아오르는 봉황의 형상을 담아 매우 수려하고 역동적으로 만들어진 백제의 황금 공예품입니다.",
                legend: "이 뒤꽂이는 왕비가 잠자리에 들 때 머리맡에 두면 악몽을 물리쳐 주는 영험한 물건이었다는 이야기가 전해집니다. 새가 액운을 쪼아 먹고 영혼을 나쁜 신들로부터 보호한다는 백제의 신앙이 깃들어 있습니다."
            }
        ]
    },
    seokjangri: {
        id: "seokjangri",
        name: "🏕️ 공주 석장리 유적",
        desc: "남한 최초로 구석기 시대 유물이 발견되어 한반도에도 수십만 년 전부터 인류가 살았음을 처음 증명해 낸 역사적 장소입니다.",
        gps: { lat: 36.4429, lng: 127.1852 },
        relics: [
            {
                id: "relic_seokjangri_1",
                name: "석장리 주먹도끼 (뗀석기)",
                hint: "구석기 인류가 돌을 깨뜨려 다용도 칼이자 도끼처럼 쥐고 썼던 투박한 뗀석기를 찍으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <path d="M50,15 L68,40 L65,70 L52,85 L48,85 L35,70 L32,40 Z" fill="#78716c" stroke="#44403c" stroke-width="2.5"/>
                        <path d="M50,15 L45,30 L32,40" fill="none" stroke="#292524" stroke-width="1.5"/>
                        <path d="M50,15 L55,35 L68,40" fill="none" stroke="#292524" stroke-width="1.5"/>
                        <path d="M35,70 L48,60 L52,85" fill="none" stroke="#292524" stroke-width="1.5"/>
                        <path d="M65,70 L52,55 L48,85" fill="none" stroke="#292524" stroke-width="1.5"/>
                        <path d="M32,40 L45,50 L35,70" fill="none" stroke="#292524" stroke-width="1.5"/>
                        <path d="M68,40 L52,48 L65,70" fill="none" stroke="#292524" stroke-width="1.5"/>
                      </svg>`,
                official: "석장리 주먹도끼는 돌의 양면을 깨뜨려서 날을 세운 대표적인 구석기 시대 유물입니다. 사냥, 가죽 벗기기, 뼈 자르기 등 만능 도구 역할을 수행했습니다.",
                legend: "1960년대 초까지만 해도 역사 교과서에는 한반도에 구석기 시대가 없었다고 쓰여 있었습니다. 당시 미국인 고고학자 대학원생 앨버트 모어 부부가 금강변을 산책하다 우연히 이 뗀석기 조각들을 발견하면서 발굴이 시작되었습니다. 이는 극동 아시아에도 독자적인 고대 인류 문화가 찬란히 존재했음을 알린 세계사적 대사건이었습니다."
            },
            {
                id: "relic_seokjangri_2",
                name: "구석기 시대 막집",
                hint: "구석기인들이 비바람을 피해 나뭇가지와 동물의 가죽으로 얼기설기 지어 머물던 원시 천막집을 촬영하세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <line x1="10" y1="85" x2="90" y2="85" stroke="#78716c" stroke-width="3"/>
                        <line x1="20" y1="85" x2="50" y2="25" stroke="#7c2d12" stroke-width="4" stroke-linecap="round"/>
                        <line x1="80" y1="85" x2="50" y2="25" stroke="#7c2d12" stroke-width="4" stroke-linecap="round"/>
                        <line x1="45" y1="85" x2="50" y2="25" stroke="#7c2d12" stroke-width="3" stroke-linecap="round"/>
                        <path d="M22,81 Q50,30 78,81" fill="#b45309" opacity="0.6" stroke="#78350f" stroke-width="1"/>
                        <path d="M30,83 Q50,45 70,83" fill="#92400e" opacity="0.8" stroke="#78350f" stroke-width="1"/>
                        <polygon points="43,85 50,55 57,85" fill="#451a03"/>
                        <circle cx="50" cy="83" r="3" fill="#ea580c"/>
                        <path d="M50,83 Q52,75 50,75 Q48,77 50,83" fill="#f97316"/>
                      </svg>`,
                official: "석장리 유적지에서는 구석기인들이 강가에 살며 지었던 집자리인 '막집'터가 발굴되었습니다. 기둥을 세우고 동물의 가죽이나 풀로 덮어 임시 주거지로 썼던 것으로 고증되었습니다.",
                legend: "발굴 당시 집터 바닥에서 불을 피웠던 화덕 자리와 함께 예쁜 돌조각들이 발견되었습니다. 구석기인들도 추위를 피해 불을 피우고 옹기종기 모여 앉아, 사나운 맹수들의 울음소리를 들으며 내일의 무사 사냥을 비는 기도를 올렸던 따뜻한 인류애가 숨어 있는 공간입니다."
            }
        ]
    },
    sangdang: {
        id: "sangdang",
        name: "⛰️ 청주 상당산성",
        desc: "조선 시대 충청 지역의 중심지였던 청주를 방어하기 위해 돌로 견고하게 쌓아 올린 산성입니다.",
        gps: { lat: 36.6534, lng: 127.5255 },
        relics: [
            {
                id: "relic_sangdang_1",
                name: "상당산성 공남문 (남문)",
                hint: "산성의 정문 역할을 하는 곳으로, 튼튼한 무지개 모양의 돌 아치형 문이 돋보이는 누각입니다.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <path d="M5,85 L95,85 L95,50 C95,50 80,45 50,45 C20,45 5,50 5,50 Z" fill="#64748b" stroke="#334155" stroke-width="2"/>
                        <path d="M35,85 C35,60 65,60 65,85 Z" fill="#0f172a" stroke="#d4af37" stroke-width="1.5"/>
                        <rect x="25" y="28" width="50" height="18" fill="#1e3a8a" stroke="#1e40af" stroke-width="1.5"/>
                        <line x1="30" y1="46" x2="30" y2="28" stroke="#991b1b" stroke-width="2"/>
                        <line x1="70" y1="46" x2="70" y2="28" stroke="#991b1b" stroke-width="2"/>
                        <path d="M18,30 Q50,15 82,30 L78,22 Q50,8 22,22 Z" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
                      </svg>`,
                official: "공남문은 상당산성의 서남쪽에 위치한 가장 큰 문이자 산성의 실질적인 정문입니다. 아치형 무지개문(홍예문)의 형태를 갖추고 있어 견고함과 아름다움을 동시에 지니고 있습니다.",
                legend: "상당산성은 삼국시대 백제가 처음 축조했다고 전해지며, 훗날 궁예가 이곳에 은거하며 군사를 훈련했다는 설이 있습니다. 임진왜란 당시 백성들이 이 남문 근처에 모여 산성을 지켰는데, 적군이 쳐들어오자 상당산 일대에 자욱한 안개가 내려앉아 아군을 감추고 적군에게만 천둥 번개가 치는 듯한 환청을 들려주어 적들이 스스로 도망쳤다는 승전 야사가 구전됩니다."
            },
            {
                id: "relic_sangdang_2",
                name: "보화정 (동장대)",
                hint: "산성의 군사들을 지휘하고 감독하기 위해 동쪽 성곽 높은 곳에 지어졌던 군사 지휘소를 찾으세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <polygon points="20,80 80,80 75,70 25,70" fill="#78716c"/>
                        <line x1="30" y1="70" x2="30" y2="40" stroke="#7c2d12" stroke-width="3"/>
                        <line x1="50" y1="70" x2="50" y2="40" stroke="#7c2d12" stroke-width="3"/>
                        <line x1="70" y1="70" x2="70" y2="40" stroke="#7c2d12" stroke-width="3"/>
                        <path d="M15,40 Q50,18 85,40 L80,30 Q50,10 20,30 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
                        <line x1="50" y1="30" x2="50" y2="10" stroke="#d4af37" stroke-width="1.5"/>
                        <polygon points="50,10 65,15 50,20" fill="#dc2626"/>
                      </svg>`,
                official: "동장대(보화정)는 성곽의 동쪽 지휘소로 장수가 군사들을 지휘하고 훈련 상태를 감시하던 전략적 공간입니다. 탁 트인 시야를 제공하여 산성 주변의 동향을 한눈에 감시할 수 있습니다.",
                legend: "전쟁이 나면 동장대에서 장군이 거대한 '북'을 쳐서 성 전체에 명령을 전달했습니다. 야사에서는 나라에 큰 전란이나 변고가 닥치기 전날 밤, 동장대 근처에서 아무도 없는데 스스로 둥, 둥 울리는 '신령한 북소리'가 들려 백성들이 미리 성안으로 대피하고 가축을 지킬 수 있었다는 설화가 전해집니다."
            }
        ]
    },
    hongpanseo: {
        id: "hongpanseo",
        name: "🏡 세종 홍판서댁",
        desc: "세종시 부강면에 위치한 옛 중상류층 가옥으로, 전통 한옥의 과학적인 배치와 아름다운 조형미를 엿볼 수 있는 문화재입니다.",
        gps: { lat: 36.4678, lng: 127.3712 },
        relics: [
            {
                id: "relic_hongpanseo_1",
                name: "홍판서댁 사랑채",
                hint: "주인집 남자들이 머물며 손님을 접대하고 학문을 닦던, 기와지붕이 길게 뻗은 건물을 촬영하세요.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <rect x="15" y="70" width="70" height="12" fill="#78716c"/>
                        <line x1="25" y1="70" x2="25" y2="40" stroke="#78350f" stroke-width="3"/>
                        <line x1="45" y1="70" x2="45" y2="40" stroke="#78350f" stroke-width="3"/>
                        <line x1="65" y1="70" x2="65" y2="40" stroke="#78350f" stroke-width="3"/>
                        <line x1="75" y1="70" x2="75" y2="40" stroke="#78350f" stroke-width="3"/>
                        <rect x="28" y="45" width="14" height="20" fill="#fef08a" stroke="#78350f" stroke-width="1"/>
                        <rect x="48" y="45" width="14" height="20" fill="#fef08a" stroke="#78350f" stroke-width="1"/>
                        <line x1="35" y1="45" x2="35" y2="65" stroke="#78350f" stroke-width="0.5"/>
                        <line x1="55" y1="45" x2="55" y2="65" stroke="#78350f" stroke-width="0.5"/>
                        <path d="M8,38 Q50,22 92,38 L85,28 Q50,15 15,28 Z" fill="#334155" stroke="#0f172a" stroke-width="2"/>
                      </svg>`,
                official: "사랑채는 사대부 가옥에서 외부 손님을 맞이하고 학문 및 사교 활동을 하던 독립된 공간입니다. 홍판서댁은 조선 후기 건축 양식과 생활상이 고스란히 남아 있는 흔치 않은 가옥입니다.",
                legend: "이 가옥은 풍수지리상 배산임수의 명당 자리에 지어져, 이곳 사랑채에 머무르며 독서하던 젊은이들이 과거 시험에 장원급제하는 경사가 빈번했다는 야사가 있습니다. 이 소문을 들은 양반가에서 아들들을 이 집 사랑채에 며칠만이라도 머물게 해달라며 쌀 포대를 들고 사정했다는 유쾌한 일화가 내려옵니다."
            },
            {
                id: "relic_hongpanseo_2",
                name: "낮은 안채 굴뚝",
                hint: "마당에 낮게 지어진 붉은 벽돌 굴뚝을 찾으세요. 연기가 하늘 높이 나가지 않고 아래로 깔리게 만든 배려의 흔적입니다.",
                svg: `<svg viewBox="0 0 100 100" width="120" height="120">
                        <rect x="0" y="0" width="100" height="100" fill="none"/>
                        <line x1="10" y1="85" x2="90" y2="85" stroke="#78716c" stroke-width="2"/>
                        <rect x="35" y="40" width="30" height="45" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.5"/>
                        <line x1="35" y1="50" x2="65" y2="50" stroke="#fca5a5" stroke-width="0.5"/>
                        <line x1="35" y1="60" x2="65" y2="60" stroke="#fca5a5" stroke-width="0.5"/>
                        <line x1="35" y1="70" x2="65" y2="70" stroke="#fca5a5" stroke-width="0.5"/>
                        <line x1="35" y1="80" x2="65" y2="80" stroke="#fca5a5" stroke-width="0.5"/>
                        <polygon points="30,40 70,40 65,30 35,30" fill="#1e293b"/>
                        <rect x="42" y="34" width="4" height="4" fill="#000"/>
                        <rect x="54" y="34" width="4" height="4" fill="#000"/>
                        <path d="M44,30 Q40,15 48,10" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
                        <path d="M56,30 Q60,20 54,12" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
                      </svg>`,
                official: "안채에서 가열된 아궁이 연기가 나가는 굴뚝을 마당 아래에 낮게 지었습니다. 이는 집안의 굴뚝 연기가 너무 높게 올라가면, 당장 끼니를 걱정해야 하는 주변 가난한 이웃들이 소외감이나 서글픔을 느끼지 않도록 배려한 조상들의 나눔과 이웃 상생 정신을 담고 있습니다.",
                legend: "이 낮은 굴뚝 때문에 집 주변에는 아침저녁으로 밥을 지을 때마다 안개가 낀 것처럼 연기가 지면에 은은히 깔렸습니다. 백성들은 이를 두고 '홍판서댁의 따뜻한 배려가 땅에 머물며 마을 전체를 포근하게 데워준다'며 칭송했고, 도적이나 외부 적들도 이 집의 아름다운 덕망에 감화되어 감히 훔칠 생각조차 하지 않았다는 미담이 야사로 흘러내려 오고 있습니다."
            }
        ]
    }
};

// ==========================================
// 2. 앱 전역 상태 관리 (App Global State)
// ==========================================

let APP_STATE = {
    deviceId: "",                    // 디바이스 구분 고유 ID (Supabase 식별용)
    currentLocId: "none",            // 가상/실제 현재 위치 유적지 ID
    unlockedRelics: [],              // 발견 성공한 유물 ID 목록 (서버/Supabase와 연동)
    selectedRelicToScan: null,       // 검증하고자 포커스 중인 유물 객체
    isRealGpsActive: false,          // 실제 디바이스 GPS 모드 활성화 여부
    gpsWatchId: null,                // Geolocator 감시 스레드 ID
    currentCoordinates: { lat: null, lng: null, accuracy: null },
    cameraStreamObj: null,           // 활성화된 미디어 카메라 스트림
    capturedImageBase64: null,       // 촬영되거나 업로드된 최종 Base64 이미지
    pendingStoryRelic: null          // 광고 건너뛰기 후 띄워줄 보류된 유물 스토리 객체
};

// ==========================================
// 3. 앱 초기화 (Init)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initDeviceId();
    loadProgressFromServer();
    initGPSSimulator();
    initRealGPSButton();
    initRelicSelectors();
    initShutter();
    initCameraIntegration();
    initModal();
    initAdSense();
});

// 구글 애드센스 동적 로드 초기화
function initAdSense() {
    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.log("ℹ️ AdSense 초기화 대기 (테스트 환경)");
    }
}

// 디바이스 고유 ID 생성/추출
function initDeviceId() {
    let devId = localStorage.getItem("history_quest_device_id");
    if (!devId) {
        devId = 'device_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("history_quest_device_id", devId);
    }
    APP_STATE.deviceId = devId;
    console.log(`📱 디바이스 고유식별자: ${devId}`);
}

// 백엔드/Supabase로부터 잠금해제 데이터 수집
async function loadProgressFromServer() {
    try {
        const response = await fetch(`/api/progress?deviceId=${APP_STATE.deviceId}`);
        const data = await response.json();
        if (data.unlockedRelics) {
            APP_STATE.unlockedRelics = data.unlockedRelics;
        }
        renderExplorerView();
        renderRelicCameraGrid();
        renderStampBook();
    } catch (err) {
        console.error("서버 데이터 로드 실패. 로컬스토리지 백업 데이터 활용:", err);
        // 폴백
        const localSaved = localStorage.getItem("sejong_history_unlocked");
        if (localSaved) {
            APP_STATE.unlockedRelics = JSON.parse(localSaved);
        }
        renderExplorerView();
        renderRelicCameraGrid();
        renderStampBook();
    }
}

// ==========================================
// 4. GPS 위치 제어 로직 (Real GPS & Virtual GPS)
// ==========================================

function initGPSSimulator() {
    const gpsButtons = document.querySelectorAll(".gps-btn[data-loc]");
    
    gpsButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (APP_STATE.isRealGpsActive) {
                // 실제 GPS 모드 시 가상 위치 변경 차단
                alert("📡 실제 GPS 센서가 켜져 있어 가상 위치 변경이 불가능합니다. 먼저 실제 GPS를 꺼주세요.");
                return;
            }
            gpsButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const locId = btn.getAttribute("data-loc");
            setVirtualGPS(locId);
        });
    });
}

function setVirtualGPS(locId) {
    APP_STATE.currentLocId = locId;
    APP_STATE.selectedRelicToScan = null;
    APP_STATE.currentCoordinates = { lat: null, lng: null, accuracy: null };
    
    document.getElementById("gps-coordinates-display").textContent = "가상 시뮬레이터 구동 중";
    updateGPSStateUI();
    renderExplorerView();
    renderRelicCameraGrid();
    updateShutterButtonState();
}

function initRealGPSButton() {
    const toggleBtn = document.getElementById("toggle-real-gps-btn");
    
    toggleBtn.addEventListener("click", () => {
        if (!APP_STATE.isRealGpsActive) {
            // GPS 구동
            if (!("geolocation" in navigator)) {
                alert("❌ 기기가 위치 정보 센서(GPS)를 지원하지 않습니다.");
                return;
            }

            toggleBtn.textContent = "📡 GPS 신호 수신 중...";
            
            APP_STATE.gpsWatchId = navigator.geolocation.watchPosition(
                (position) => {
                    APP_STATE.isRealGpsActive = true;
                    toggleBtn.classList.add("real-gps-active");
                    toggleBtn.textContent = "🟢 실제 GPS 동작 중 (끄기)";
                    
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const accuracy = position.coords.accuracy;
                    
                    APP_STATE.currentCoordinates = { lat, lng, accuracy };
                    
                    document.getElementById("gps-coordinates-display").textContent = 
                        `실제 GPS -> 위도: ${lat.toFixed(5)} | 경도: ${lng.toFixed(5)} (오차: ${accuracy.toFixed(1)}m)`;

                    // 가상 GPS 비활성화 및 위치 판단
                    document.querySelectorAll(".gps-btn[data-loc]").forEach(b => b.classList.remove("active"));
                    
                    determineLocationFromGPS(lat, lng);
                },
                (error) => {
                    console.error("GPS 수신 오류:", error);
                    alert("❌ GPS 위치 정보를 가져오지 못했습니다. 위치 권한 허용 여부를 확인해 주세요.");
                    stopRealGPS();
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            stopRealGPS();
        }
    });
}

function stopRealGPS() {
    if (APP_STATE.gpsWatchId) {
        navigator.geolocation.clearWatch(APP_STATE.gpsWatchId);
        APP_STATE.gpsWatchId = null;
    }
    APP_STATE.isRealGpsActive = false;
    
    const toggleBtn = document.getElementById("toggle-real-gps-btn");
    toggleBtn.classList.remove("real-gps-active");
    toggleBtn.textContent = "📡 디바이스 실제 GPS 켜기";
    
    setVirtualGPS("none");
}

// 실제 획득한 위도 경도로부터 유적지 반경 자동 판독
function determineLocationFromGPS(lat, lng) {
    let matchedLocId = "none";
    
    // 하버사인 거리 계산 적용
    for (const [locId, locData] of Object.entries(LOCATIONS_DB)) {
        const dist = getDistance(lat, lng, locData.gps.lat, locData.gps.lng);
        if (dist <= 200) { // 반경 200m 이내
            matchedLocId = locId;
            break;
        }
    }

    if (APP_STATE.currentLocId !== matchedLocId) {
        APP_STATE.currentLocId = matchedLocId;
        APP_STATE.selectedRelicToScan = null;
        updateGPSStateUI();
        renderExplorerView();
        renderRelicCameraGrid();
        updateShutterButtonState();
    }
}

// 거리 계산 헬퍼
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function updateGPSStateUI() {
    const badge = document.getElementById("gps-status-badge");
    const label = document.getElementById("current-gps-name");
    
    if (APP_STATE.currentLocId === "none") {
        badge.className = "badge";
        label.textContent = "GPS 수신 대기 중";
    } else {
        badge.className = "badge gps-active";
        const locName = LOCATIONS_DB[APP_STATE.currentLocId].name;
        label.textContent = `위치 인증됨: ${locName.split(" ").slice(1).join(" ")}`;
    }
}

// ==========================================
// 5. 탐험 활성 퀘스트 렌더링
// ==========================================

function renderExplorerView() {
    const offlineCard = document.getElementById("gps-offline-card");
    const infoCard = document.getElementById("location-info-card");
    const cameraSection = document.getElementById("camera-section");
    
    if (APP_STATE.currentLocId === "none") {
        offlineCard.classList.remove("hidden");
        infoCard.classList.add("hidden");
        cameraSection.classList.add("hidden");
        return;
    }

    offlineCard.classList.add("hidden");
    infoCard.classList.remove("hidden");
    cameraSection.classList.remove("hidden");

    const locData = LOCATIONS_DB[APP_STATE.currentLocId];
    document.getElementById("location-name").textContent = locData.name;
    document.getElementById("location-desc").textContent = locData.desc;

    const questContainer = document.getElementById("quest-item-container");
    questContainer.innerHTML = "";

    locData.relics.forEach((relic, idx) => {
        const isCompleted = APP_STATE.unlockedRelics.includes(relic.id);
        
        const questItem = document.createElement("div");
        questItem.className = `quest-item ${isCompleted ? 'completed' : ''}`;
        
        questItem.innerHTML = `
            <div class="quest-icon-box">
                ${isCompleted ? `
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M9 16.17 L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                ` : `
                    <span style="font-size:0.8rem; font-weight:700; color:var(--gold-color)">Q${idx+1}</span>
                `}
            </div>
            <div class="quest-details">
                <div class="quest-title">${relic.name} 발견하기</div>
                <div class="quest-hint">${isCompleted ? '찾기 완료! 이야기를 잠금 해제했습니다.' : `힌트: ${relic.hint}`}</div>
            </div>
            <div class="quest-status">${isCompleted ? '완료' : '진행 중'}</div>
        `;
        
        questContainer.appendChild(questItem);
    });
}

// ==========================================
// 6. 하드웨어 카메라 및 업로드 파일 연동 (Camera Integration)
// ==========================================

function initCameraIntegration() {
    const startCamBtn = document.getElementById("start-camera-btn");
    const uploadFileBtn = document.getElementById("upload-file-btn");
    const fileInput = document.getElementById("image-upload");
    
    const triggerUploadBtn = document.getElementById("trigger-upload-btn");
    const retakePhotoBtn = document.getElementById("retake-photo-btn");

    // 1. 미디어 카메라 켜기
    startCamBtn.addEventListener("click", startHardwareCamera);

    // 2. 파일 업로드 연동
    uploadFileBtn.addEventListener("click", () => fileInput.click());
    triggerUploadBtn.addEventListener("click", () => fileInput.click());
    
    fileInput.addEventListener("change", handleFileSelection);

    // 3. 사진 다시 찍기
    retakePhotoBtn.addEventListener("click", () => {
        APP_STATE.capturedImageBase64 = null;
        startHardwareCamera();
    });
}

async function startHardwareCamera() {
    const video = document.getElementById("camera-stream");
    const imgView = document.getElementById("viewfinder-captured-image");
    const placeholderUi = document.getElementById("viewfinder-placeholder-ui");
    const controls = document.getElementById("camera-active-controls");
    
    placeholderUi.classList.add("hidden");
    imgView.classList.add("hidden");
    video.classList.remove("hidden");
    controls.classList.add("hidden");

    try {
        if (APP_STATE.cameraStreamObj) {
            stopHardwareCamera();
        }

        // 스마트폰 후면 카메라 활성화 환경 타깃
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false
        });
        
        APP_STATE.cameraStreamObj = stream;
        video.srcObject = stream;
        console.log("🟢 카메라 하드웨어 스트림 연결 성공");
    } catch (err) {
        console.error("카메라 연결 실패:", err);
        alert("카메라 스트림을 시작하지 못했습니다. 브라우저 카메라 권한을 확인하시거나 '앨범 사진 업로드' 기능을 이용해 주세요.");
        resetCameraUI();
    }
}

function stopHardwareCamera() {
    if (APP_STATE.cameraStreamObj) {
        APP_STATE.cameraStreamObj.getTracks().forEach(track => track.stop());
        APP_STATE.cameraStreamObj = null;
    }
}

function resetCameraUI() {
    stopHardwareCamera();
    
    document.getElementById("camera-stream").classList.add("hidden");
    document.getElementById("viewfinder-captured-image").classList.add("hidden");
    document.getElementById("viewfinder-placeholder-ui").classList.remove("hidden");
    document.getElementById("camera-active-controls").classList.add("hidden");
    
    APP_STATE.capturedImageBase64 = null;
    updateShutterButtonState();
}

function handleFileSelection(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        displayCapturedImage(evt.target.result);
    };
    reader.readAsDataURL(file);
}

function displayCapturedImage(base64Data) {
    stopHardwareCamera();
    
    APP_STATE.capturedImageBase64 = base64Data;
    
    const video = document.getElementById("camera-stream");
    const imgView = document.getElementById("viewfinder-captured-image");
    const placeholderUi = document.getElementById("viewfinder-placeholder-ui");
    const controls = document.getElementById("camera-active-controls");

    video.classList.add("hidden");
    placeholderUi.classList.add("hidden");
    imgView.classList.remove("hidden");
    controls.classList.remove("hidden");

    imgView.style.backgroundImage = `url(${base64Data})`;
    
    updateShutterButtonState();
}

function updateShutterButtonState() {
    const btn = document.getElementById("shutter-btn");
    // 목표 유물이 설정되어 있고, 카메라 스트림이 켜져 있거나 이미 캡쳐/업로드된 사진이 있으면 버튼 활성화
    const hasMedia = APP_STATE.cameraStreamObj !== null || APP_STATE.capturedImageBase64 !== null;
    btn.disabled = !(APP_STATE.selectedRelicToScan && hasMedia);
}

// 유물 셀렉터 렌더링
function initRelicSelectors() {
    renderRelicCameraGrid();
}

function renderRelicCameraGrid() {
    const grid = document.getElementById("sim-relic-select-grid");
    grid.innerHTML = "";

    Object.values(LOCATIONS_DB).forEach(loc => {
        loc.relics.forEach(relic => {
            const isCompleted = APP_STATE.unlockedRelics.includes(relic.id);
            const card = document.createElement("div");
            card.className = `relic-btn-card ${APP_STATE.selectedRelicToScan?.id === relic.id ? 'selected' : ''}`;
            if (isCompleted) card.style.opacity = "0.7";
            
            card.innerHTML = `
                ${relic.svg}
                <span class="relic-btn-name">${relic.name}</span>
                <span class="relic-btn-loc">${loc.name.split(" ").slice(1).join(" ")}</span>
            `;

            card.addEventListener("click", () => {
                document.querySelectorAll(".relic-btn-card").forEach(c => c.classList.remove("selected"));
                
                if (APP_STATE.selectedRelicToScan?.id === relic.id) {
                    APP_STATE.selectedRelicToScan = null;
                } else {
                    APP_STATE.selectedRelicToScan = relic;
                    card.classList.add("selected");
                }
                
                updateShutterButtonState();
            });

            grid.appendChild(card);
        });
    });
}

// ==========================================
// 7. 실시간 AI API & 실제 GPS 전송 (Shutter Event)
// ==========================================

function initShutter() {
    const shutter = document.getElementById("shutter-btn");
    shutter.addEventListener("click", () => {
        // 비디오 스트림 실행 중이면 캔버스에 프레임 복사하여 촬영 완료 처리
        if (APP_STATE.cameraStreamObj) {
            captureFrameFromVideo();
        }
        
        if (!APP_STATE.capturedImageBase64) {
            alert("촬영되거나 업로드된 유물 사진이 없습니다.");
            return;
        }

        sendScanRequestToAIBackend();
    });
}

function captureFrameFromVideo() {
    const video = document.getElementById("camera-stream");
    const canvas = document.getElementById("capture-canvas");
    const ctx = canvas.getContext("2d");
    
    // 비디오 원래 해상도로 캔버스 크기 지정
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const base64 = canvas.toDataURL("image/jpeg", 0.85);
    displayCapturedImage(base64);
}

async function sendScanRequestToAIBackend() {
    const overlay = document.getElementById("scan-progress-overlay");
    const statusText = document.getElementById("scan-status-text");
    const progressBar = document.getElementById("scan-progress-bar");
    
    overlay.classList.remove("hidden");
    progressBar.style.width = "0%";
    
    // AI 검증 단계 로딩 애니메이션
    const steps = [
        { progress: 15, text: "📷 렌즈 초점 조정 및 이미지 캡처..." },
        { progress: 45, text: "📡 Geolocation 연동 기기 GPS 분석 중..." },
        { progress: 80, text: "🧠 Gemini VLM 실시간 유물 형태 분석 중..." },
        { progress: 100, text: "✅ 분석 성공!" }
    ];

    let currentStep = 0;
    const loadAnimInterval = setInterval(() => {
        if (currentStep < steps.length) {
            statusText.textContent = steps[currentStep].text;
            progressBar.style.width = `${steps[currentStep].progress}%`;
            currentStep++;
        }
    }, 400);

    try {
        const payload = {
            image: APP_STATE.capturedImageBase64,
            lat: APP_STATE.currentCoordinates.lat,
            lng: APP_STATE.currentCoordinates.lng,
            relicId: APP_STATE.selectedRelicToScan.id,
            deviceId: APP_STATE.deviceId,
            bypassGps: !APP_STATE.isRealGpsActive // 가상 GPS인 경우 거리 계산 필터링 우회
        };

        const response = await fetch("/api/scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        clearInterval(loadAnimInterval);
        progressBar.style.width = "100%";
        
        setTimeout(() => {
            overlay.classList.add("hidden");
            
            if (result.success) {
                // 획득 성공 -> 바로 스토리 팝업 띄우기
                loadProgressFromServer();
                openStoryModal(APP_STATE.selectedRelicToScan);
            } else {
                alert(`⚠️ 스캔 실패!\n\n${result.message}`);
                resetCameraUI();
            }
        }, 800);

    } catch (err) {
        clearInterval(loadAnimInterval);
        overlay.classList.add("hidden");
        console.error("스캔 API 통신 장애:", err);
        alert("⚠️ 서버와의 통신 중 에러가 발생했습니다. 서버 연결 상태 및 네트워크망을 확인해 주세요.");
        resetCameraUI();
    }
}


// ==========================================
// 9. 스토리 모달 제어 (Modal)
// ==========================================

function initModal() {
    const closeBtn = document.getElementById("close-modal-btn");
    const nextBtn = document.getElementById("modal-next-quest-btn");
    
    closeBtn.addEventListener("click", closeModal);
    nextBtn.addEventListener("click", closeModal);

    const tabs = document.querySelectorAll(".story-tabs .tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const tabType = tab.getAttribute("data-tab");
            const officialPane = document.getElementById("tab-content-official");
            const legendPane = document.getElementById("tab-content-legend");

            if (tabType === "official") {
                officialPane.classList.add("active");
                legendPane.classList.remove("active");
            } else {
                officialPane.classList.remove("active");
                legendPane.classList.add("active");
            }
        });
    });
}

function openStoryModal(relic) {
    const modal = document.getElementById("story-modal");
    
    document.getElementById("modal-relic-name").textContent = relic.name;
    document.getElementById("modal-relic-svg").innerHTML = relic.svg;
    document.getElementById("tab-content-official").innerHTML = `<p>${relic.official}</p>`;
    document.getElementById("tab-content-legend").innerHTML = `<p>${relic.legend}</p>`;
    
    document.querySelectorAll(".story-tabs .tab-btn").forEach(t => t.classList.remove("active"));
    document.querySelector(".story-tabs .tab-btn[data-tab='official']").classList.add("active");
    document.getElementById("tab-content-official").classList.add("active");
    document.getElementById("tab-content-legend").classList.remove("active");

    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("story-modal");
    modal.classList.add("hidden");
    
    resetCameraUI();
}

// ==========================================
// 10. 스탬프 북 렌더링
// ==========================================

function renderStampBook() {
    const grid = document.getElementById("stamp-book-grid");
    grid.innerHTML = "";

    Object.values(LOCATIONS_DB).forEach(loc => {
        const totalRelics = loc.relics.length;
        const unlockedCount = loc.relics.filter(r => APP_STATE.unlockedRelics.includes(r.id)).length;
        const isCompleted = totalRelics === unlockedCount;

        const card = document.createElement("div");
        card.className = `stamp-card ${isCompleted ? 'unlocked' : ''}`;

        const stampSvg = getStampSVG(loc.id);

        card.innerHTML = `
            <div class="stamp-badge-wrapper">
                ${stampSvg}
            </div>
            <div class="stamp-card-title">${loc.name.split(" ").slice(1).join(" ")}</div>
            <div class="stamp-card-progress">${unlockedCount} / ${totalRelics} 발견</div>
        `;

        grid.appendChild(card);
    });
}

function getStampSVG(locId) {
    let innerGraphic = "";
    
    switch(locId) {
        case "muryeong":
            innerGraphic = `<circle cx="50" cy="50" r="30" fill="none" stroke-dasharray="4 2"/><polygon points="50,22 58,40 78,40 62,50 68,70 50,58 32,70 38,50 22,40 42,40" fill="none"/>`;
            break;
        case "gongsan":
            innerGraphic = `<path d="M25,65 L75,65 L75,45 L60,45 L60,35 L40,35 L40,45 L25,45 Z" fill="none"/><line x1="20" y1="65" x2="80" y2="65" />`;
            break;
        case "museum":
            innerGraphic = `<rect x="28" y="28" width="44" height="44" fill="none" rx="2"/><line x1="38" y1="40" x2="62" y2="40"/><line x1="38" y1="50" x2="62" y2="50"/><line x1="38" y1="60" x2="62" y2="60"/>`;
            break;
        case "seokjangri":
            innerGraphic = `<polygon points="50,22 75,50 60,78 40,78 25,50" fill="none"/><line x1="50" y1="22" x2="50" y2="78" stroke-dasharray="2 2"/>`;
            break;
        case "sangdang":
            innerGraphic = `<circle cx="50" cy="50" r="32" fill="none" stroke-width="2"/><path d="M20,68 C20,68 35,42 50,42 C65,42 80,68 80,68" fill="none"/>`;
            break;
        case "hongpanseo":
            innerGraphic = `<path d="M20,55 L50,25 L80,55 M30,55 L30,75 L70,75 L70,55" fill="none"/>`;
            break;
    }

    return `<svg class="stamp-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="43" fill="none" stroke-width="3" stroke-dasharray="1 1"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke-width="1.5"/>
                ${innerGraphic}
            </svg>`;
}
