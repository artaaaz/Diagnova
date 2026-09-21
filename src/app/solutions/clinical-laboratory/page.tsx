import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clinical Laboratory Solutions — Diagnova",
  description: SOLUTIONS_SUBPAGES["clinical-laboratory"].description,
  alternates: { canonical: "/solutions/clinical-laboratory" },
};

export default function ClinicalLabPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES["clinical-laboratory"]}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "Reporting Architecture", href: "/platform/reporting" },
        { title: "TAT Operational Analytics", href: "/platform/analytics" },
        { title: "Inventory & Reagent Module", href: "/modules/inventory-reagent" },
      ]}
    />
  );
}
