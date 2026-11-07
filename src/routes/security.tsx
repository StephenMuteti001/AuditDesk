import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/Legal";

const TITLE = "Security Disclosures | AuditDesk";
const DESC = "How to report a security vulnerability to AuditDesk and how we handle responsible disclosure.";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/security" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  component: function LegalRoute() {
    return <LegalPage kind="security" />;
  },
});
