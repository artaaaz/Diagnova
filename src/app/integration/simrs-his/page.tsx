import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { INTEGRATION_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "SIMRS / HIS Bridging — Diagnova Native Interoperability",
  description: INTEGRATION_SUBPAGES["simrs-his"].description,
  alternates: { canonical: "/integration/simrs-his" },
};

export default function SIMRSHISPage() {
  return (
    <SubpageTemplate
      data={INTEGRATION_SUBPAGES["simrs-his"]}
      parentSection={{ title: "Integration", href: "/integration" }}
      relatedPages={[
        { title: "RME / EMR Integration", href: "/integration/rme" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
        { title: "Smart Gateway & Connectivity", href: "/integration/connectivity" },
      ]}
    />
  );
}
