import { buildLlmsTxt, textResponse } from "@/lib/seo";

export function GET() {
  return textResponse(buildLlmsTxt(), "text/plain; charset=utf-8");
}
