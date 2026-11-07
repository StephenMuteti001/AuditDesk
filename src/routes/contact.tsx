import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/Contact";

const TITLE = "Contact Sales | AuditDesk";
const DESC = "Talk to the AuditDesk team about SIEM, database activity monitoring, privileged access management and observability for your regulated enterprise.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
