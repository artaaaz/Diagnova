import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diagnova Insight — Operational Analytics & TAT Reduction",
  description: PLATFORM_SUBPAGES.analytics.description,
  alternates: { canonical: "/platform/analytics" },
};

export default function AnalyticsPage() {
  return (
    <SubpageTemplate
      data={PLATFORM_SUBPAGES.analytics}
      parentSection={{ title: "Platform", href: "/platform" }}
      relatedPages={[
        { title: "Inventory & Reagent Management", href: "/modules/inventory-reagent" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
        { title: "Workflow Optimization", href: "/platform/workflow" },
      ]}
    />
  );
}
