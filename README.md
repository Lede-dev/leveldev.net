# LevelDev Homepage

LevelDev Inc.의 공식 홈페이지입니다. Vinext로 빌드한 정적 콘텐츠와 에셋을
Cloudflare Worker에서 제공합니다.

## Local development

```bash
npm ci
npm run dev
```

## Production deployment

`master` 브랜치에 변경 사항이 푸시되면 GitHub Actions가 다음 순서로
`leveldev.net`에 자동 배포합니다.

1. 의존성 설치
2. ESLint 검사
3. Vinext 프로덕션 빌드
4. 렌더링 테스트
5. Cloudflare Worker 및 정적 에셋 배포

GitHub 저장소에는 아래 Actions secrets가 필요합니다.

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

배포 워크플로는 [`.github/workflows/deploy-cloudflare.yml`](.github/workflows/deploy-cloudflare.yml)에 있습니다.

LevelDev의 게임·메타버스 제작 역량과 프로젝트를 소개하는 반응형 단일 페이지
홈페이지입니다. 서버 상태나 데이터베이스 없이 정적인 콘텐츠만 제공합니다.

## 기술 구성

- Next.js 16 + React 19
- Vinext + Vite
- TypeScript
- 순수 CSS 기반 반응형 디자인

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 열립니다.

## 검증 및 빌드

```bash
npm run build
node --test tests/rendered-html.test.mjs
```
