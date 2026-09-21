import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blood Bank Management Solutions — Diagnova",
  description: SOLUTIONS_SUBPAGES["blood-bank"].description,
  alternates: { canonical: "/solutions/blood-bank" },
};

export default function BloodBankSolutionPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES["blood-bank"]}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "Blood Bank Clinical Module", href: "/modules/blood-bank" },
        { title: "Inventory & Reagent Module", href: "/modules/inventory-reagent" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
      ]}
    />
  );
}
