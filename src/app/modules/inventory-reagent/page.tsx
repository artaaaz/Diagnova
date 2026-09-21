import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { MODULES_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Inventory & Reagent Management Module — Diagnova",
  description: MODULES_SUBPAGES["inventory-reagent"].description,
  alternates: { canonical: "/modules/inventory-reagent" },
};

export default function InventoryReagentModulePage() {
  return (
    <SubpageTemplate
      data={MODULES_SUBPAGES["inventory-reagent"]}
      parentSection={{ title: "Modules", href: "/modules" }}
      relatedPages={[
        { title: "Routine & Hematology Module", href: "/modules/routine-hematology" },
        { title: "TAT Operational Analytics", href: "/platform/analytics" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
      ]}
    />
  );
}
