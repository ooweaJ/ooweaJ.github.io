/* ============================================================
   PROJECTS — 프로젝트를 추가/수정할 때 이 파일만 편집하세요.

   각 항목 필드:
     id          : 고유 식별자 (영문, 중복 없게)
     name        : 프로젝트 이름 *필수*
     subtitle    : 영문 부제 (선택)
     concept     : 카드에 표시할 한 줄 컨셉 (선택)
     description : 프로젝트 설명 원문/메모 (선택, 카드에는 concept 우선 표시)
     category    : 분류 태그 — 예: 'VR', 'Game', 'Tool' (선택)
     role        : 역할 — 예: 'Lead Programmer' (선택)
     period      : 기간 — 예: '2025.03 — 2025.06' (선택)
     tech        : 기술스택, 쉼표로 구분 — 예: 'UE5, C++' (선택)
     thumbnail   : 썸네일 이미지 URL (선택)
     video       : 영상 링크 (선택)
     docs        : 기술문서 PDF 링크 (선택)
     devlog      : 개발일지/Notion 링크 (선택)
     github      : GitHub 링크 (선택)
     featured    : true = 대표 프로젝트 (큰 카드로 최상단 표시)
     hasAward    : true = 수상 태그 표시
     award       : 수상 내역 — 예: '대상'
     hasHost     : true = 주최 태그 표시
     host        : 주최처 — 예: '한국콘텐츠진흥원'

   에셋 경로 규칙:
     assets/projects/{id}/thumbnail.png
     assets/projects/{id}/docs/{id}-technical-report.pdf
   ============================================================ */
const PROJECTS = [
  {
    id: 'unity-dedicate',
    name: 'Rumble Arena',
    subtitle: 'Server-authoritative Arena Multiplayer',
    concept: 'Unity Dedicated Server와 Mirror 기반으로 로비/배틀 서버를 분리한 2v2 아레나 PvP 프로젝트입니다.',
    description: 'Unity Dedicated PvP는 전용 배틀 서버 구조를 직접 설계한 멀티플레이어 아레나 게임입니다.\n\n로비 서버와 배틀 서버를 분리하고, Mirror/KCP 기반 네트워크 흐름 위에서 매치메이킹, 전투 상태머신, 결과 처리, 로비 복귀 흐름을 구성했습니다. 서버는 캐릭터 스탯과 스킬 쿨다운을 재검증하는 Server Authority 구조로 설계해 클라이언트 조작 가능성을 줄였습니다.\n\n전투 시스템은 ScriptableObject 기반 캐릭터/스킬 데이터, 근거리/발사체/돌진 액션, 팀 전멸 또는 타임오버 HP 비율 기반 승패 판정으로 구성했습니다. PC와 모바일 입력은 IPlayerInputProvider 인터페이스로 추상화해 같은 PlayerController가 플랫폼별 입력 구현만 교체해 사용할 수 있도록 만들었습니다.\n\n프로젝트 구조와 기술문서를 교차 확인한 결과, Assets/_dev/Script 아래 Battle, Combat, Server, Player, Inventory, Gacha, Lobby, Login, Shop 영역으로 기능이 분리되어 있습니다.',
    category: 'Multiplayer / Server',
    role: 'Network / Gameplay Developer',
    period: '2026',
    tech: 'Unity, C#, Mirror, KCP, Dedicated Server, Node.js, MySQL',
    thumbnail: 'assets/projects/unity-dedicate/thumbnail.png',
    video: 'https://youtube.com/',
    docs: 'assets/projects/unity-dedicate/docs/unity-dedicate-technical-report.html',
    devlog: 'https://www.notion.so/Unity-Dedicated-Server-C-Mirror-2c4dc21508298045b0c0fcc4b95c99aa',
    github: 'https://github.com/ooweaJ/Unity_Dedicate',
    featured: true,
    hasAward: false,
    award: '',
    hasHost: false,
    host: '',
  },

  {
    id: 'vrbeat',
    name: 'VRBeat',
    subtitle: 'Rhythm Action in Virtual Reality',
    concept: 'Meta Quest 3를 목표로 제작한 Unity 기반 VR 리듬게임입니다.',
    description: 'VRBeat는 양손 세이버로 빨강/파랑 노트를 베며 음악의 정박을 맞추는 1인 개발 VR 리듬게임입니다.\n\nBeat Saber식 방향성 액션을 그대로 복제하기보다, 노트가 판정선에 도달하는 순간을 정확히 맞추는 전통 리듬게임의 타격감을 VR 공간에서 구현하는 데 초점을 두었습니다.\n\nSongSelect, Gameplay, Result로 이어지는 게임 루프를 구성하고, World-space UI 기반 곡 선택/결과/설정/튜토리얼/캘리브레이션 화면을 구현했습니다. Gameplay에서는 AudioSettings.dspTime과 PlayScheduled를 기준으로 음악, 노트 위치, 판정을 동기화하고, 사용자 오디오 지연을 보정하는 2단계 캘리브레이션을 추가했습니다.\n\n노트 시스템은 일반 노트와 롱노트, 색상 매칭, 방향 판정, Perfect/Great/Good/Miss 판정, 콤보, 체력, 최고점수 저장을 포함합니다. 세이버 입력은 XR 컨트롤러 기반으로 처리하고, 빠른 스윙에서 노트가 통과되는 문제를 줄이기 위해 세이버 Tip의 이전 위치와 현재 위치 사이를 Raycast하는 방식도 함께 사용했습니다.\n\n콘텐츠 파이프라인은 StreamingAssets/Songs 아래의 JSON 곡 포맷을 기준으로 구성했습니다. Beat Saber/BeatSage .dat 변환 도구와 mp3/wav/ogg 분석 기반 자동 채보 생성 도구를 Python으로 작성해, 곡 추가와 차트 제작 과정을 로컬에서 반복할 수 있도록 만들었습니다.\n\n이 프로젝트를 통해 VR 입력, 오디오 싱크, 리듬 판정, 런타임 콘텐츠 로딩, 자동 채보 도구 제작을 하나의 플레이 가능한 루프로 연결하는 과정을 경험했습니다.',
    category: 'VR Rhythm Game',
    role: 'Solo Developer',
    period: '2026',
    tech: 'Unity 6, C#, OpenXR, XR Interaction Toolkit, URP, Python, JSON',
    thumbnail: 'assets/projects/vrbeat/thumbnail.png',
    video: 'https://youtu.be/XdSFuX_5fTw',
    docs: '',
    devlog: '',
    github: 'https://github.com/ooweaJ/VRBeat',
    featured: false,
    hasAward: false,
    award: '',
    hasHost: false,
    host: '',
  },
];
