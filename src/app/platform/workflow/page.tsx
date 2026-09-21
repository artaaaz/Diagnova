import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Workflow Engine — Diagnova Flow",
  description: PLATFORM_SUBPAGES.workflow.description,
  alternates: { canonical: "/platform/workflow" },
};

export default function WorkflowPage() {
  return (
    <SubpageTemplate
      data={PLATFORM_SUBPAGES.workflow}
      parentSection={{ title: "Platform", href: "/platform" }}
      relatedPages={[
        { title: "Automation & Direct Interfacing", href: "/platform/automation" },
        { title: "Reporting Architecture", href: "/platform/reporting" },
        { title: "Routine & Hematology Module", href: "/modules/routine-hematology" },
      ]}
    />
  );
}
