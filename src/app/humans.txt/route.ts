import { buildHumansTxt, textResponse } from "@/lib/seo";

export function GET() {
  return textResponse(buildHumansTxt());
}
