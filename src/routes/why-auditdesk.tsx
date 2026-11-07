import { createFileRoute } from "@tanstack/react-router";
import WhyAuditDeskPage from "@/pages/WhyAuditDesk";

const TITLE = "Before & After AuditDesk | Why AuditDesk";
const DESC = "What changes when security events, database activity, privileged access and service health share one tamper-evident record — a before and after comparison.";

export const Route = createFileRoute("/why-auditdesk")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-auditdesk" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/why-auditdesk" }],
  }),
  component: WhyAuditDeskPage,
});
