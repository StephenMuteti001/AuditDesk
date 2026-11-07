import { createFileRoute } from "@tanstack/react-router";
import SolutionsPage from "@/pages/Solution";

const TITLE = "Enterprise Security Solutions | AuditDesk";
const DESC = "Four connected modules: Log Management & SIEM, Database Activity Monitoring, Privileged Access Management and Observability & APM — on one tamper-evident evidence store.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});
