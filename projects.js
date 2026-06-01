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
   ============================================================ */
const PROJECTS = [
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
    thumbnail: 'assets/vrbeat-thumbnail.png',
    video: 'https://youtube.com/',
    docs: 'assets/docs/vrbeat-technical-report.pdf',
    devlog: 'https://notion.so/',
    github: 'https://github.com/ooweaJ',
    featured: true,
    hasAward: false,
    award: '',
    hasHost: false,
    host: '',
  },
];
