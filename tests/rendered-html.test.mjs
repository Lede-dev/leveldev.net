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

test("server-renders the LevelDev landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>LevelDev — We Build Worlds<\/title>/i);
  assert.match(html, /WE BUILD/);
  assert.match(html, /WORLDS/);
  assert.match(html, /픽셀로 세계를/);
  assert.match(html, /우리가 하는 일/);
  assert.match(html, /Dragon(?:'|&#x27;)s Keep/);
  assert.match(html, /우리의 <span>발자취<\/span>/);
  assert.match(html, /mailto:hello@leveldev\.studio/);
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
