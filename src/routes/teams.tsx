import { createFileRoute } from "@tanstack/react-router";
import TeamsPage from "@/pages/Teams";

const TITLE = "Benefits for Every Team | AuditDesk";
const DESC = "How AuditDesk serves CEOs, technical directors, O&M personnel, integration engineers, compliance and audit specialists, legal, finance, business operations and security teams.";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/teams" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/teams" }],
  }),
  component: TeamsPage,
});
