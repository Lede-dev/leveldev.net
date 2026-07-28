import assert from "node:assert/strict";
import test from "node:test";

test("serves crawler discovery files with explicit UTF-8 content types", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-discovery`);
  const { default: worker } = await import(workerUrl.href);
  const assetBodies = new Map([
    ["/llms.txt", "# LevelDev Inc.\n\n레벨데브는 콘텐츠를 제작합니다."],
    ["/robots.txt", "User-agent: *\nAllow: /"],
    ["/sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?><urlset />'],
  ]);

  for (const [pathname, body] of assetBodies) {
    const response = await worker.fetch(
      new Request(`http://localhost${pathname}`),
      {
        ASSETS: {
          fetch: async () =>
            new Response(body, {
              headers: {
                "content-type": pathname.endsWith(".xml")
                  ? "application/xml"
                  : "text/plain",
              },
            }),
        },
      },
      {
        waitUntil() {},
        passThroughOnException() {},
      },
    );

    assert.equal(response.status, 200);
    assert.match(
      response.headers.get("content-type") ?? "",
      /;\s*charset=utf-8$/i,
    );
    assert.equal(await response.text(), body);
  }
});
