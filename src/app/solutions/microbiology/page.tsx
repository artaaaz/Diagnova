import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clinical Microbiology Solutions — Diagnova",
  description: SOLUTIONS_SUBPAGES.microbiology.description,
  alternates: { canonical: "/solutions/microbiology" },
};

export default function MicrobiologySolutionPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES.microbiology}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "Microbiology Clinical Module", href: "/modules/microbiology" },
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
        { title: "Reporting Architecture", href: "/platform/reporting" },
      ]}
    />
  );
}
