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
  assert.match(html, /아이디어를 경험으로/);
  assert.match(html, /연결합니다/);
  assert.match(html, /10M<\/span><span class="stat-suffix">\+<\/span>/);
  assert.match(html, /누적 콘텐츠 조회수/);
  assert.match(html, /완료 작업/);
  assert.match(html, /콘텐츠 개발 경력/);
  assert.match(html, /레벨데브는 기획·개발·운영을 하나로 연결해/);
  assert.doesNotMatch(html, /LevelDev Inc\.는/);
  assert.doesNotMatch(html, /연결하는 콘텐츠 기업|콘텐츠 개발사입니다/);
  assert.match(html, /이루/);
  assert.match(html, /셔니/);
  assert.match(html, /블던/);
  assert.match(html, /알지모/);
  assert.match(html, /머땡/);
  assert.match(html, /Stella IT/);
  assert.match(html, /\/partners\/iru\.jpg/);
  assert.match(html, /https:\/\/stella-it\.com\//);
  assert.match(html, /마인크래프트 BE·JE 콘텐츠부터 Unreal·Godot 기반 게임/);
  assert.match(html, /월드·맵 &amp; 아트 리소스 제작/);
  assert.match(html, /게임플레이 &amp; 시스템 개발/);
  assert.match(html, /크리에이터 콘텐츠 제작/);
  assert.match(html, /기술 개발 &amp; 운영 지원/);
  assert.match(html, /플러그인/);
  assert.match(html, /서버 콘텐츠 시스템/);
  assert.match(html, /2D 리소스/);
  assert.match(html, /3D 리소스/);
  assert.match(html, /Unreal/);
  assert.match(html, /Godot/);
  assert.doesNotMatch(html, /Unity/);
  assert.match(html, /스트리머 서버/);
  assert.match(html, /서버 최적화/);
  assert.match(html, /콘텐츠 제작 파이프라인/);
  assert.match(html, /class="service-explorer"/);
  assert.match(html, /role="tablist"/);
  assert.match(html, /data-icon="world"/);
  assert.match(html, /data-icon="gameplay"/);
  assert.match(html, /data-icon="creator"/);
  assert.match(html, /data-icon="tech"/);
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
  assert.match(
    html,
    /chzzk\.naver\.com\/05ca39e26587ea916a9eba1c6ae2d4ba\/community\/detail\/25626757/,
  );
  assert.match(
    html,
    /chzzk\.naver\.com\/6bcc176b0fa71673540159febcd97cd4\/community\/detail\/22065765/,
  );
  assert.match(html, /youtube\.com\/watch\?v=GAJ3yv0Ot9E/);
  assert.match(html, /class="project-action">프로젝트 보기 ↗<\/span>/);
  assert.match(html, /<article class="project-card">[\s\S]*?모징어 게임/);
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
  assert.match(html, /\/symbol\.svg/);
  assert.doesNotMatch(html, /<span>LEVELDEV<\/span>/);
  assert.match(html, /class="media-showcase"/);
  assert.match(html, /SELECTED VIDEO/);
  assert.match(html, /NEXT VIDEOS/);
  assert.match(html, /aria-label="이전 영상 목록 보기"/);
  assert.match(html, /aria-label="다음 영상 목록 보기"/);
  assert.match(html, /data-count="2"/);
  assert.match(html, /YouTube 채널에서 더 보기/);
  assert.doesNotMatch(html, /video-play/);
  assert.doesNotMatch(html, />SELECT</);
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
