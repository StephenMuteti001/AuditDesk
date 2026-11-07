import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/About";

const TITLE = "About AuditDesk | Enterprise Security Engineering in Kenya";
const DESC = "AuditDesk builds enterprise SIEM, database activity monitoring, privileged access and observability software in Nairobi for organisations regulated by the ODPC and CBK.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
