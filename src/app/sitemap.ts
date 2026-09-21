import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diagnova.id";
  const now = new Date();

  const routes = [
    // Main Pages
    "",
    "/request-demo",

    // Platform & Subpages
    "/platform",
    "/platform/overview",
    "/platform/workflow",
    "/platform/automation",
    "/platform/reporting",
    "/platform/analytics",

    // Solutions & Subpages
    "/solutions",
    "/solutions/hospital-laboratory",
    "/solutions/clinical-laboratory",
    "/solutions/pathology",
    "/solutions/microbiology",
    "/solutions/blood-bank",
    "/solutions/nova-ai",

    // Modules & Subpages
    "/modules",
    "/modules/routine-hematology",
    "/modules/blood-bank",
    "/modules/inventory-reagent",
    "/modules/pathology",
    "/modules/microbiology",

    // Nova AI & Subpages
    "/nova-ai",
    "/nova-ai/how-it-works",
    "/nova-ai/ai-doctor",

    // Integration & Subpages
    "/integration",
    "/integration/simrs-his",
    "/integration/rme",
    "/integration/analyzer",
    "/integration/satusehat",
    "/integration/connectivity",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/request-demo") ? 0.9 : 0.8,
  }));
}
