/* ============================================================
   PROJECTS — 프로젝트를 추가/수정할 때 이 파일만 편집하세요.

   각 항목 필드:
     id          : 고유 식별자 (영문, 중복 없게)
     name        : 프로젝트 이름 *필수*
     subtitle    : 영문 부제 (선택)
     concept     : 카드에 표시할 한 줄 컨셉 (선택)
     description : 자세히 보기에 표시할 상세 설명 (선택)
     category    : 분류 태그 — 예: 'VR', 'Game', 'Tool' (선택)
     role        : 역할 — 예: 'Lead Programmer' (선택)
     period      : 기간 — 예: '2025.03 — 2025.06' (선택)
     tech        : 기술스택, 쉼표로 구분 — 예: 'UE5, C++' (선택)
     thumbnail   : 썸네일 이미지 URL (선택)
     video       : 영상 링크 (선택)
     notion      : Notion 링크 — 있으면 '자세히 보기' 클릭 시 Notion으로 이동 (선택)
     github      : GitHub 링크 (선택)
     featured    : true = 대표 프로젝트 (큰 카드로 최상단 표시)
     hasAward    : true = 수상 태그 표시
     award       : 수상 내역 — 예: '대상'
     hasHost     : true = 주최 태그 표시
     host        : 주최처 — 예: '한국콘텐츠진흥원'
   ============================================================ */
const PROJECTS = [
  {
    id: 'p1',
    name: '프로젝트 이름',
    subtitle: 'English Subtitle',
    concept: '한 줄 컨셉',
    description: '상세 설명을 여기에 적으세요.',
    category: 'VR',
    role: 'Lead Programmer',
    period: '2025.03 — 2025.06',
    tech: 'UE5, C++, Niagara',
    thumbnail: 'https://...',
    video: 'https://youtube.com/...',
    notion: 'https://notion.so/...',
    github: 'https://github.com/...',
    featured: false,
    hasAward: false,
    award: '',
    hasHost: false,
    host: '',
  },
];
