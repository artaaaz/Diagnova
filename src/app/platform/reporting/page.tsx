import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clinical Reporting — Clear & Actionable Reports",
  description: PLATFORM_SUBPAGES.reporting.description,
  alternates: { canonical: "/platform/reporting" },
};

export default function ReportingPage() {
  return (
    <SubpageTemplate
      data={PLATFORM_SUBPAGES.reporting}
      parentSection={{ title: "Platform", href: "/platform" }}
      relatedPages={[
        { title: "RME / EMR Synchronization", href: "/integration/rme" },
        { title: "SATUSEHAT National Health", href: "/integration/satusehat" },
        { title: "TAT Analytics", href: "/platform/analytics" },
      ]}
    />
  );
}
