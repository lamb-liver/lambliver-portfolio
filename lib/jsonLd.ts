/** 避免 JSON-LD 中的 </script> 破壞 HTML 解析 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
