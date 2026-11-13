import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#eef8ef",
    theme_color: "#0f2414",
    lang: "en-IN",
    categories: ["business", "shopping"],
  };
}
