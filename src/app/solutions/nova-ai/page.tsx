import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nova AI Clinical Copilot Solution — Diagnova",
  description: SOLUTIONS_SUBPAGES["nova-ai"].description,
  alternates: { canonical: "/solutions/nova-ai" },
};

export default function NovaAISolutionPage() {
  return (
    <SubpageTemplate
      data={SOLUTIONS_SUBPAGES["nova-ai"]}
      parentSection={{ title: "Solutions", href: "/solutions" }}
      relatedPages={[
        { title: "Nova AI Intelligence Hub", href: "/nova-ai" },
        { title: "How Nova AI Works", href: "/nova-ai/how-it-works" },
        { title: "AI + Doctor Symbiosis", href: "/nova-ai/ai-doctor" },
      ]}
    />
  );
}
