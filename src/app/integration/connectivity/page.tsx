import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { INTEGRATION_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resilient Connectivity & Offline-Buffer Mode — Diagnova",
  description: INTEGRATION_SUBPAGES.connectivity.description,
  alternates: { canonical: "/integration/connectivity" },
};

export default function ConnectivityPage() {
  return (
    <SubpageTemplate
      data={INTEGRATION_SUBPAGES.connectivity}
      parentSection={{ title: "Integration", href: "/integration" }}
      relatedPages={[
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
        { title: "100% Automation & Interfacing", href: "/platform/automation" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
      ]}
    />
  );
}
