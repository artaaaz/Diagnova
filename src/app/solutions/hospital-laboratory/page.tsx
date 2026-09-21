import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hospital Laboratory Intelligence — Diagnova",
  description: SOLUTIONS_SUBPAGES["hospital-laboratory"].description,
  alternates: { canonical: "/solutions/hospital-laboratory" },
};

export default function HospitalLabPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES["hospital-laboratory"]}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "SIMRS / HIS Bridging", href: "/integration/simrs-his" },
        { title: "Routine & Hematology Module", href: "/modules/routine-hematology" },
        { title: "Smart Gateway & Connectivity", href: "/integration/connectivity" },
      ]}
    />
  );
}
