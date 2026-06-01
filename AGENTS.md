# Portfolio Repo Guidelines

## Scope

These instructions apply to this portfolio repository.

This is a static GitHub Pages portfolio. Project content belongs in `projects.js` unless layout, rendering behavior, or shared styles need to change in `index.html`.

## Project Content Rules

- Write portfolio copy in Korean unless the field is explicitly an English subtitle.
- Keep wording concise, grounded, and developer-focused.
- Avoid exaggerated or unverifiable claims.
- Do not invent links, awards, metrics, team size, ownership, or results.
- Leave unknown optional fields as empty strings.
- Keep each project `id` stable, unique, and lowercase-friendly.
- Use `featured: true` only for projects that should appear as large cards.
- Use `docs` for technical document PDFs and `devlog` for Notion/development logs.
- Prefer explicit buttons such as `기술문서`, `개발일지`, `Video`, and `GitHub` over vague labels like `자세히 보기`.

## Source Verification

When adding or updating a project from another repo, document, README, Notion page, or user notes:

1. Inspect this portfolio repo first and confirm the current content schema in `projects.js`.
2. Read the provided summary document if one exists.
3. Inspect the actual project source structure and available evidence:
   - README or docs
   - package/build files
   - source folders and notable module names
   - screenshots, videos, or asset folders
   - commit history when useful
4. Cross-check the written document against the real project structure.
5. If the document and source disagree, prefer the verifiable source or ask the user before stating the claim.
6. Separate verified personal contributions from team-level project outcomes.

## Writing Pattern

When the page format allows, describe each project in this order:

1. Problem: what the project tried to solve or explore.
2. Solution: the core interaction, feature, or implementation approach.
3. Technology: concrete engine, language, framework, API, or system details.
4. Lessons learned: what was learned or improved, without overstating impact.

Prefer verbs such as:

- 구현했습니다
- 설계했습니다
- 개선했습니다
- 경험했습니다
- 학습했습니다
- 다루었습니다

Avoid unless verified:

- 대폭 향상
- 완벽하게
- 혁신적인
- 최고의
- 성공적으로 런칭
- 사용자 만족도를 크게 개선
- numeric performance claims without evidence

## Safety Checks

- Do not expose private keys, `.env` values, API tokens, credentials, or private URLs.
- For team projects, be careful with asset licenses, teammate contributions, school/company rules, and public visibility.
- For Unreal Engine or Unity projects, do not copy large binary assets into this repo unless explicitly requested.
- Prefer linking screenshots or videos over importing heavy project files.

## Validation

After editing this portfolio:

1. Check `git diff`.
2. Run a JavaScript syntax check when practical.
3. Preview the page locally when layout or rendering may be affected.
4. Confirm project cards and detail modals render without obvious console errors.
