import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { MODULES_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blood Bank & Transfusion Safety Module — Diagnova",
  description: MODULES_SUBPAGES["blood-bank"].description,
  alternates: { canonical: "/modules/blood-bank" },
};

export default function BloodBankModulePage() {
  return (
    <SubpageTemplate
      data={MODULES_SUBPAGES["blood-bank"]}
      parentSection={{ title: "Modules", href: "/modules" }}
      relatedPages={[
        { title: "Blood Bank Solutions", href: "/solutions/blood-bank" },
        { title: "Inventory & Reagent Module", href: "/modules/inventory-reagent" },
        { title: "Clinical Reporting", href: "/platform/reporting" },
      ]}
    />
  );
}
