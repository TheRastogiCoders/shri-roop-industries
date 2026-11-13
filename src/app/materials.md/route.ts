import { buildMaterialsMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildMaterialsMarkdown());
}
