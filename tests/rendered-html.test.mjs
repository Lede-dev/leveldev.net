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

test("server-renders the LevelDev Minecraft studio landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(
    html,
    /<title>LevelDev Studio — 마인크래프트 콘텐츠 &amp; 게임 개발<\/title>/i,
  );
  assert.match(html, /MINECRAFT CONTENT STUDIO/);
  assert.match(html, /픽셀로 세계를/);
  assert.match(html, /10M\+/);
  assert.match(html, /누적 콘텐츠 조회수/);
  assert.match(html, /완료 작업/);
  assert.match(html, /스튜디오 경력/);
  assert.match(html, /이루/);
  assert.match(html, /셔니/);
  assert.match(html, /블던/);
  assert.match(html, /알지모/);
  assert.match(html, /머땡/);
  assert.match(html, /Stella IT/);
  assert.match(html, /\/partners\/iru\.jpg/);
  assert.match(html, /https:\/\/stella-it\.com\//);
  assert.match(html, /마인크래프트 맵 제작/);
  assert.match(html, /한강서버/);
  assert.match(html, /이리와 운동회/);
  assert.match(html, /모징어 게임/);
  assert.match(html, /블루점프 원블럭/);
  assert.match(html, /대월향 &amp; 블루점프/);
  assert.match(html, /\/projects\/hangang-server\.jpg/);
  assert.match(html, /youtube\.com\/watch\?v=I04NY35EDlg/);
  assert.match(html, /youtube\.com\/watch\?v=UNk70G0rAS0/);
  assert.match(html, /youtube\.com\/watch\?v=0PJj4ETImRQ/);
  assert.match(html, /18\.7만 조회 · 2025\.07\.27/);
  assert.match(html, /누적 조회수 5,000만 뷰/);
  assert.match(html, /mailto:jobs@leveldev\.studio/);
  assert.doesNotMatch(html, /github\.com|LedeStudios|GitHub/);
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
