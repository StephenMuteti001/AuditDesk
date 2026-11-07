import { createFileRoute } from "@tanstack/react-router";
import CompliancePage from "@/pages/Compliance";
import { STANDARDS } from "@/lib/compliance";

const TITLE = "Compliance Standards & Control Mapping | AuditDesk";
const DESC =
  "How AuditDesk evidence maps to ODPC Data Protection Act 2019, CBK Cybersecurity Guidelines, PCI-DSS v4.0 and ISO/IEC 27001 control requirements.";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/compliance" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: STANDARDS.map((standard) => ({
            "@type": "Question",
            name: `How does AuditDesk support ${standard.abbr}?`,
            acceptedAnswer: { "@type": "Answer", text: standard.note },
          })),
        }),
      },
    ],
  }),
  component: CompliancePage,
});
