import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { MODULES_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Routine & Hematology Module — Diagnova",
  description: MODULES_SUBPAGES["routine-hematology"].description,
  alternates: { canonical: "/modules/routine-hematology" },
};

export default function RoutineHematologyPage() {
  return (
    <SubpageTemplate
      data={MODULES_SUBPAGES["routine-hematology"]}
      parentSection={{ title: "Modules", href: "/modules" }}
      relatedPages={[
        { title: "Inventory & Reagent Module", href: "/modules/inventory-reagent" },
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
        { title: "Hospital Laboratory Solution", href: "/solutions/hospital-laboratory" },
      ]}
    />
  );
}
