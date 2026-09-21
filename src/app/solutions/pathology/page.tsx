import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Anatomic Pathology & Cytology Solutions — Diagnova",
  description: SOLUTIONS_SUBPAGES.pathology.description,
  alternates: { canonical: "/solutions/pathology" },
};

export default function PathologySolutionPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES.pathology}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "Pathology Clinical Module", href: "/modules/pathology" },
        { title: "RME / EMR Integration", href: "/integration/rme" },
        { title: "Workflow Progression", href: "/platform/workflow" },
      ]}
    />
  );
}
