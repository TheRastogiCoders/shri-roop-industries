import { buildLlmsFullTxt, textResponse } from "@/lib/seo";

export function GET() {
  return textResponse(buildLlmsFullTxt(), "text/plain; charset=utf-8");
}
