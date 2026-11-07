import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/Legal";

const TITLE = "Privacy Policy | AuditDesk";
const DESC = "How AuditDesk collects, uses and protects personal data across its website and enterprise security products.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: function LegalRoute() {
    return <LegalPage kind="privacy" />;
  },
});
