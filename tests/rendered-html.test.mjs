import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the LevelDev Inc. content development company landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(
    html,
    /<title>LevelDev Inc\. — 콘텐츠 기획·개발·운영<\/title>/i,
  );
  assert.match(html, /CONTENT DEVELOPMENT COMPANY/);
  assert.match(html, /WE BUILD/);
  assert.match(html, /CONTENT/);
  assert.match(html, /기획부터 운영까지/);
  assert.match(html, /10M\+/);
  assert.match(html, /누적 콘텐츠 조회수/);
  assert.match(html, /완료 작업/);
  assert.match(html, /콘텐츠 개발 경력/);
  assert.match(html, /LevelDev Inc\.는/);
  assert.match(html, /연결하는 콘텐츠 기업/);
  assert.match(html, /콘텐츠 개발사입니다/);
  assert.match(html, /이루/);
  assert.match(html, /셔니/);
  assert.match(html, /블던/);
  assert.match(html, /알지모/);
  assert.match(html, /머땡/);
  assert.match(html, /Stella IT/);
  assert.match(html, /\/partners\/iru\.jpg/);
  assert.match(html, /https:\/\/stella-it\.com\//);
  assert.match(html, /전략 기획 &amp; 프로덕션/);
  assert.match(html, /인터랙티브 경험 개발/);
  assert.match(html, /크리에이터 &amp; 브랜드 캠페인/);
  assert.match(html, /기술 운영 &amp; 성장 지원/);
  assert.match(html, /PLAN/);
  assert.match(html, /BUILD/);
  assert.match(html, /CONNECT/);
  assert.match(html, /OPERATE/);
  assert.match(html, /한강서버/);
  assert.match(html, /이리와 운동회/);
  assert.match(html, /모징어 게임/);
  assert.match(html, /블루점프 원블럭/);
  assert.match(html, /대월향 &amp; 블루점프/);
  assert.match(html, /\/projects\/hangang-server\.png/);
  assert.match(html, /\/projects\/bluejump-oneblock\.png/);
  assert.match(html, /class="project-carousel"/);
  assert.match(html, /class="project-track"/);
  assert.match(html, /class="project-slide"/);
  assert.match(html, /aria-label="다음 프로젝트 보기"/);
  assert.match(html, /\/videos\/mojingeo-game\.jpg/);
  assert.match(html, /youtube\.com\/watch\?v=I04NY35EDlg/);
  assert.match(html, /youtube\.com\/watch\?v=UNk70G0rAS0/);
  assert.match(html, /youtube\.com\/watch\?v=0PJj4ETImRQ/);
  assert.match(html, /18\.7만 조회 · 2025\.07\.27/);
  assert.match(html, /mailto:contact@leveldev\.net/);
  assert.match(html, /https:\/\/discord\.gg\/49HEWTA/);
  assert.match(html, /youtube\.com\/channel\/UCYRR-uYiex4Cx7IIIwFlEpg/);
  assert.match(html, /https:\/\/github\.com\/leveldevinc/);
  assert.match(html, /mailto:contact@leveldev\.net/);
  assert.match(html, /\/icons\/discord\.svg/);
  assert.match(html, /\/icons\/youtube\.svg/);
  assert.match(html, /\/icons\/github\.svg/);
  assert.match(html, /\/icons\/mail\.svg/);
  assert.match(html, /\/logo\.svg/);
  assert.match(html, /class="media-showcase"/);
  assert.match(html, /SELECTED VIDEO/);
  assert.match(html, /NEXT VIDEOS/);
  assert.match(html, /aria-label="이전 영상 목록 보기"/);
  assert.match(html, /aria-label="다음 영상 목록 보기"/);
  assert.match(html, /data-count="2"/);
  assert.match(html, /YouTube 채널에서 더 보기/);
  assert.match(html, /© 2026 LEVELDEV INC\. ALL RIGHTS RESERVED\./);
  assert.doesNotMatch(html, /© 2026 LEVELDEV STUDIO/);
  assert.doesNotMatch(html, /CONTENT DEVELOPMENT STUDIO|스튜디오 소개|개발 스튜디오/);
  assert.doesNotMatch(html, /brand-mark|채널 구독 문의/);
  assert.doesNotMatch(html, /filter-row|project-number|id="history"|HISTORY/);
  assert.doesNotMatch(html, /hello@leveldev\.studio|LedeStudios/);
});

test("ships finished metadata without starter preview markers", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|taking shape/i);
  assert.match(html, /property="og:title"/i);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(
    html,
    /content="https:\/\/leveldev-studio-home\.lede-7716\.chatgpt\.site\/og\.png"/i,
  );
});
