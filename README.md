# LevelDev Homepage

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
