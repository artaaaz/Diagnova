import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Platform Overview — One Platform to Manage the Entire Laboratory Workflow",
  description: PLATFORM_SUBPAGES.overview.description,
  alternates: { canonical: "/platform/overview" },
};

export default function OverviewPage() {
  return (
    <SubpageTemplate
      data={PLATFORM_SUBPAGES.overview}
      parentSection={{ title: "Platform", href: "/platform" }}
      relatedPages={[
        { title: "Workflow Engine", href: "/platform/workflow" },
        { title: "Automation & Interfacing", href: "/platform/automation" },
        { title: "Reporting System", href: "/platform/reporting" },
        { title: "TAT Analytics", href: "/platform/analytics" },
      ]}
    />
  );
}
