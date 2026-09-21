import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { INTEGRATION_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "RME / EMR Integration & Synchronization — Diagnova",
  description: INTEGRATION_SUBPAGES.rme.description,
  alternates: { canonical: "/integration/rme" },
};

export default function RMEPage() {
  return (
    <SubpageTemplate
      data={INTEGRATION_SUBPAGES.rme}
      parentSection={{ title: "Integration", href: "/integration" }}
      relatedPages={[
        { title: "SIMRS / HIS Bridging", href: "/integration/simrs-his" },
        { title: "SATUSEHAT Compliance", href: "/integration/satusehat" },
        { title: "Clinical Reporting", href: "/platform/reporting" },
      ]}
    />
  );
}
