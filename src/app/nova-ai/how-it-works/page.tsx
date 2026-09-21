import type { Metadata } from "next";
import { SubpageTemplate } from "@/components/subpage-template";
import { NOVA_AI_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "How Nova AI Works — Observe → Understand → Explain → Assist",
  description: NOVA_AI_SUBPAGES["how-it-works"].description,
  alternates: { canonical: "/nova-ai/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <SubpageTemplate
      data={NOVA_AI_SUBPAGES["how-it-works"]}
      parentSection={{ title: "Nova AI", href: "/nova-ai" }}
      relatedPages={[
        { title: "AI + Doctor Symbiosis", href: "/nova-ai/ai-doctor" },
        { title: "Automation & Interfacing", href: "/platform/automation" },
        { title: "500+ Analyzer Interfacing", href: "/integration/analyzer" },
      ]}
    />
  );
}
