import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { MODULES_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clinical Microbiology & AST Module — Diagnova",
  description: MODULES_SUBPAGES.microbiology.description,
  alternates: { canonical: "/modules/microbiology" },
};

export default function MicrobiologyModulePage() {
  return (
    <SubpageTemplate
      data={MODULES_SUBPAGES.microbiology}
      parentSection={{ title: "Modules", href: "/modules" }}
      relatedPages={[
        { title: "Microbiology Solutions", href: "/solutions/microbiology" },
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
        { title: "SATUSEHAT National Health", href: "/integration/satusehat" },
      ]}
    />
  );
}
