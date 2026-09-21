import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { INTEGRATION_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "500+ Laboratory Analyzer Interfacing (HL7 / ASTM) — Diagnova",
  description: INTEGRATION_SUBPAGES.analyzer.description,
  alternates: { canonical: "/integration/analyzer" },
};

export default function AnalyzerPage() {
  return (
    <SubpageTemplate
      data={INTEGRATION_SUBPAGES.analyzer}
      parentSection={{ title: "Integration", href: "/integration" }}
      relatedPages={[
        { title: "Smart Gateway & Connectivity", href: "/integration/connectivity" },
        { title: "100% Automation & Interfacing", href: "/platform/automation" },
        { title: "Routine & Hematology Module", href: "/modules/routine-hematology" },
      ]}
    />
  );
}
