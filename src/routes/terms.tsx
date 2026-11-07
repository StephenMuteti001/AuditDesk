import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/Legal";

const TITLE = "Terms of Service | AuditDesk";
const DESC = "The terms that govern use of the AuditDesk website and enterprise security and compliance software.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: function LegalRoute() {
    return <LegalPage kind="terms" />;
  },
});
