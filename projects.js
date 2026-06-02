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
     docs        : 기술문서 링크 (선택)
     aiCollab    : AI 협업 패널 데이터 (선택)
     devlog      : 개발일지/Notion 링크 (선택)
     github      : GitHub 링크 (선택)
     featured    : true = 대표 프로젝트 (큰 카드로 최상단 표시)
     hasAward    : true = 수상 태그 표시
     award       : 수상 내역 — 예: '대상'
     hasHost     : true = 주최 태그 표시
     host        : 주최처 — 예: '한국콘텐츠진흥원'

   에셋 경로 규칙:
     assets/projects/{id}/thumbnail.png
     assets/projects/{id}/docs/{id}-technical-report.html
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
    aiCollab: {
      title: 'AI Agent 기반 서버 구조 검토',
      summary: 'Mirror와 Dedicated Server 구조를 직접 학습하며 구현한 뒤, CLI 기반 AI Agent를 서버 이동 흐름과 위험 지점 검토에 활용했습니다.',
      cases: [
        {
          title: 'Lobby → Battle Server 이동 흐름',
          problem: '매칭 후 클라이언트가 로비 서버 연결을 끊고 Battle Server로 재접속해야 했습니다. 이 과정은 씬 전환, IP/Port 전달, NetworkManager 상태가 함께 얽히는 구간입니다.',
          aiUse: 'AI Agent와 StopClient, LoadingScene, StartClient 기반 서버 이동 흐름에서 발생할 수 있는 콜백 위험을 검토했습니다.',
          control: '의도적 서버 이동을 일반 연결 실패와 구분하기 위해 이동 상태 플래그와 LoadingScene 기반 접속 흐름으로 책임을 분리했습니다.',
          result: '서버 이동 흐름을 로비 연결 종료, 로딩 씬 진입, 새 배틀 서버 접속 단계로 나누어 설명할 수 있게 정리했습니다.',
        },
        {
          title: 'Disconnect 콜백 오판 방지',
          problem: 'Mirror의 disconnect 이벤트는 정상적인 서버 이동과 비정상 연결 종료를 자동으로 구분하지 않습니다.',
          aiUse: 'AI Agent가 제시한 단순 재접속 흐름을 실제 Mirror 콜백 순서와 비교하며 위험 지점을 점검했습니다.',
          control: 'OnClientDisconnect 처리에서 서버 이동 중 상태를 분기하고, 다음 접속은 SceneFlowManager와 LoadingSceneManager가 담당하도록 정리했습니다.',
          result: '정상적인 서버 이동과 연결 실패를 구분하는 기준을 세워, 씬 전환이 의도와 다르게 돌아가는 위험을 줄였습니다.',
        },
        {
          title: '서버 권위 표현 범위 검증',
          problem: '기술문서의 서버 권위 설명이 실제 코드로 확인되는 범위를 넘어가면 과장 표현이 될 수 있습니다.',
          aiUse: 'AI Agent로 전투 판정, 쿨다운, 인증/스탯 검증 표현을 코드 기준으로 다시 검토했습니다.',
          control: '스킬 쿨다운과 피해 판정처럼 확인 가능한 구현과, 인증 단계 스탯 재검증처럼 보강이 필요한 항목을 분리했습니다.',
          result: '구현된 서버 판정과 아직 보강이 필요한 검증 범위를 분리해, 서버 권위 구조를 과장하지 않고 설명할 수 있게 했습니다.',
        },
      ],
      takeaway: 'AI Agent는 구조 후보와 위험 지점을 빠르게 나열하는 데 사용했고, 최종 판단은 실제 Mirror 동작과 프로젝트 코드 기준으로 수행했습니다.',
    },
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
    aiCollab: {
      title: 'Claude 역기획과 Unity MCP 워크플로우',
      summary: 'Claude로 Beat Saber의 재미 구조를 분해하고, Unity MCP로 반복 구현을 보조받았습니다. 최종 판단은 오디오 싱크, 판정 안정성, 플레이테스트 기준으로 직접 조정했습니다.',
      cases: [
        {
          title: 'Beat Saber 역기획 → 정박 판정 중심으로 재설계',
          problem: 'Beat Saber를 그대로 따라가면 방향성 베기 액션 중심의 모작에 머물 수 있었습니다.',
          aiUse: 'Claude와 Beat Saber의 코어 루프를 분해하고, VR 리듬게임의 기능 후보를 정리했습니다.',
          control: '방향성 액션보다 판정선 도달 시점과 정박 타격감을 우선하는 구조로 프로젝트 정체성을 조정했습니다.',
          result: '모작의 범위를 줄이고, VRBeat의 핵심을 "멋있게 베기"보다 "정확한 타이밍에 맞추는 리듬감"으로 명확히 잡았습니다.',
        },
        {
          title: 'dspTime 기반 오디오 싱크',
          problem: 'Time.deltaTime 누적 방식은 프레임 드랍이 발생하면 음악과 노트 위치가 어긋날 수 있습니다.',
          aiUse: '역기획 과정에서 리듬게임의 기준 시간이 프레임이 아니라 오디오 엔진 시간이어야 한다는 구조를 정리했습니다.',
          control: 'AudioSettings.dspTime과 PlayScheduled를 기준으로 음악 시작, 노트 위치, 판정 시간을 같은 축에 묶었습니다.',
          result: '음악 시작, 노트 위치, 판정 시간을 하나의 오디오 시간축으로 묶어 프레임 드랍에 따른 박자 밀림 위험을 줄였습니다.',
        },
        {
          title: '세이버 Tip Raycast로 터널링 보정',
          problem: 'VR 세이버는 한 프레임 사이 이동 거리가 커서 Trigger 충돌만으로는 노트를 통과할 수 있습니다.',
          aiUse: 'Unity MCP와 구현 반복 과정에서 세이버 입력과 충돌 감지 구조를 점검했습니다.',
          control: '이전 Tip 위치와 현재 Tip 위치 사이를 Raycast로 검사하고, Trigger 판정은 보조로 유지했습니다.',
          result: '빠르게 휘둘렀는데 노트가 통과되는 문제를 줄이고, 플레이어가 맞게 베었다고 느끼는 입력 신뢰도를 높였습니다.',
        },
        {
          title: '자동 채보 도구 후처리',
          problem: '오디오 onset을 그대로 노트로 바꾸면 채보가 지나치게 촘촘하거나 음악적으로 거칠어졌습니다.',
          aiUse: 'AI가 만든 자동 채보 초안을 바탕으로 onset 기반 분석, BPM 검출, 노트 배치 후보를 실험했습니다.',
          control: '임계값, 최소 간격, 박자 양자화, 좌우 손 분리, 방향 흐름, 롱노트 삽입 후처리를 추가했습니다.',
          result: '자동 채보를 "완성된 맵 생성"이 아니라, 사람이 검수하고 다듬을 수 있는 초안 생성 파이프라인으로 정리했습니다.',
        },
      ],
      takeaway: 'AI와 Unity MCP는 후보 생성과 반복 작업을 빠르게 만드는 데 활용했고, VR 플레이 감각에 직접 닿는 싱크, 판정, 입력 안정성은 직접 테스트와 코드 수정으로 검증했습니다.',
    },
    devlog: '',
    github: 'https://github.com/ooweaJ/VRBeat',
    featured: false,
    hasAward: false,
    award: '',
    hasHost: false,
    host: '',
  },
];
