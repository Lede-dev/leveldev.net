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
  assert.match(html, /마인크래프트 맵 제작/);
  assert.match(html, /Dragon(?:'|&#x27;)s Keep/);
  assert.match(html, /SkyWars Pro/);
  assert.match(html, /누적 조회수 5,000만 뷰/);
  assert.match(html, /mailto:jobs@leveldev\.studio/);
  assert.match(html, /github\.com\/LedeStudios\/leveldev-home/);
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
