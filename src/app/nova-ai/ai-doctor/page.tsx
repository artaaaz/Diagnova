import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { NOVA_AI_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI + Doctor: The Symbiotic Partnership — Diagnova",
  description: NOVA_AI_SUBPAGES["ai-doctor"].description,
  alternates: { canonical: "/nova-ai/ai-doctor" },
};

export default function AIDoctorPage() {
  return (
    <SubpageTemplate
      data={NOVA_AI_SUBPAGES["ai-doctor"]}
      parentSection={{ title: "Nova AI", href: "/nova-ai" }}
      relatedPages={[
        { title: "How Nova AI Works", href: "/nova-ai/how-it-works" },
        { title: "Clinical Reporting", href: "/platform/reporting" },
        { title: "Hospital Laboratory Solutions", href: "/solutions/hospital-laboratory" },
      ]}
    />
  );
}
