import { describe, expect, it } from "vitest";
import { serializeJsonLd } from "@/lib/jsonLd";

describe("serializeJsonLd", () => {
  it("將 < 轉為 \\u003c，避免破壞 script 標籤", () => {
    const raw = serializeJsonLd({ name: "</script><img>" });
    expect(raw).not.toContain("</script>");
    expect(raw).toMatch(/\\u003c\/script>/);
  });
});
