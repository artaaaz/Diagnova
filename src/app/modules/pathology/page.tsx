import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { MODULES_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Anatomic Pathology & Cytology Module — Diagnova",
  description: MODULES_SUBPAGES.pathology.description,
  alternates: { canonical: "/modules/pathology" },
};

export default function PathologyModulePage() {
  return (
    <SubpageTemplate
      data={MODULES_SUBPAGES.pathology}
      parentSection={{ title: "Modules", href: "/modules" }}
      relatedPages={[
        { title: "Pathology Solutions", href: "/solutions/pathology" },
        { title: "Clinical Reporting", href: "/platform/reporting" },
        { title: "RME / EMR Synchronization", href: "/integration/rme" },
      ]}
    />
  );
}
