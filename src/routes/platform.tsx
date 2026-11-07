import { createFileRoute } from "@tanstack/react-router";
import PlatformPage from "@/pages/Platform";

const TITLE = "Platform Architecture | AuditDesk";
const DESC = "How AuditDesk collects, normalises, correlates, retains and controls access to enterprise telemetry — with tamper-evident storage and in-country data residency.";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});
