import { createFileRoute } from "@tanstack/react-router";
import IndexPage from "@/pages/Index";

const TITLE = "AuditDesk — Enterprise SIEM, Log Management & Data Compliance";
const DESC =
  "AuditDesk unifies SIEM and log management, database activity monitoring, privileged access security and observability — with tamper-evident evidence for ODPC, CBK, PCI-DSS and ISO 27001 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "SIEM Kenya, Log Management, ODPC Compliance, CBK Cybersecurity Guidelines, Database Activity Monitoring East Africa, Enterprise PIM PAM, Automated Audit Logs, ISO 27001 evidence, PCI-DSS logging" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AuditDesk",
            description: DESC,
            email: "sales@auditdesk.co.ke",
            address: { "@type": "PostalAddress", addressLocality: "Westlands, Nairobi", addressCountry: "KE" },
            areaServed: ["Kenya", "East Africa"],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AuditDesk Enterprise Suite",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Cloud, On-premise",
            description:
              "SIEM & log management, database activity monitoring, privileged access management and observability with automated compliance audit trails.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Contact sales for pricing" },
          },
        ]),
      },
    ],
  }),
  component: IndexPage,
});
