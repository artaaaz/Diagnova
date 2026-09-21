import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { INTEGRATION_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "SATUSEHAT Interoperability & Compliance — Diagnova",
  description: INTEGRATION_SUBPAGES.satusehat.description,
  alternates: { canonical: "/integration/satusehat" },
};

export default function SatusehatPage() {
  return (
    <SubpageTemplate
      data={INTEGRATION_SUBPAGES.satusehat}
      parentSection={{ title: "Integration", href: "/integration" }}
      relatedPages={[
        { title: "RME / EMR Integration", href: "/integration/rme" },
        { title: "SIMRS / HIS Bridging", href: "/integration/simrs-his" },
        { title: "Clinical Reporting", href: "/platform/reporting" },
      ]}
    />
  );
}
