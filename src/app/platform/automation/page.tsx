import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "100% Automation & Direct Analyzer Interfacing — Diagnova",
  description: PLATFORM_SUBPAGES.automation.description,
  alternates: { canonical: "/platform/automation" },
};

export default function AutomationPage() {
  return (
    <SubpageTemplate
      data={PLATFORM_SUBPAGES.automation}
      parentSection={{ title: "Platform", href: "/platform" }}
      relatedPages={[
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
        { title: "Smart Gateway & Connectivity", href: "/integration/connectivity" },
        { title: "Nova AI Delta Check", href: "/nova-ai" },
      ]}
    />
  );
}
