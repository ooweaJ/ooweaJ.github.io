# TODO

## 현재 상태
- `index.html` 1182번째 줄 `ADMIN_PASSWORD = '1234'` — 클라이언트(브라우저)에서 비밀번호를 검증함.
- GitHub Pages 정적 호스팅이라 비밀번호가 소스에 그대로 노출됨 → 진짜 보안 아님, "편집 UI 숨기기" 용도.
- 편집 내용은 `localStorage`에 저장됨 → 본인 브라우저에만 남고 다른 기기/방문자에게 반영 안 됨.

## 결정 필요 (먼저 정해야 할 것)
- [ ] 편집한 포트폴리오 내용을 **다른 기기/방문자에게도 보이게 저장**할 것인가? (Yes면 DB 필요)
- [ ] 인증 방식 선택:
  - [ ] 직접 운영: 리눅스 서버 + Docker + 자체 auth 서버
  - [ ] 매니지드: Firebase Auth / Supabase / Netlify Identity / Cloudflare Access

## 옵션 A: 직접 백엔드 운영 (리눅스 + Docker)
- [ ] 리눅스 서버 준비 (AWS / 오라클 클라우드 / 기타 VM)
- [ ] 백엔드 앱 작성 (Node.js+Express 또는 Python+FastAPI)
- [ ] 로그인 API: 비밀번호 검증 → JWT 토큰 또는 세션 발급
- [ ] 편집/저장 API: 토큰 검증 후에만 데이터 변경 허용
- [ ] 포트폴리오 데이터 저장소 (DB 또는 파일)
- [ ] Dockerfile 작성 + 컨테이너화
- [ ] HTTPS 적용 (리버스 프록시 nginx + 인증서)
- [ ] 비밀번호를 코드가 아닌 환경변수/시크릿으로 관리
- [ ] 프론트엔드(index.html)를 localStorage 대신 API 호출하도록 수정

## 옵션 B: 매니지드 서비스 (서버 운영 최소화)
- [ ] 서비스 선정 (Firebase / Supabase 등)
- [ ] 인증(로그인) 연동
- [ ] 데이터 저장소(Firestore / Supabase DB) 연동
- [ ] 프론트엔드를 해당 SDK 호출로 수정

## 보안 정리
- [ ] `ADMIN_PASSWORD` 하드코딩 제거 (백엔드 도입 후)
- [ ] 진짜 비밀번호는 절대 클라이언트 코드에 넣지 않기
