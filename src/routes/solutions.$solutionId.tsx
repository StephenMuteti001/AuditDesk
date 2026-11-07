import { createFileRoute } from "@tanstack/react-router";
import SolutionDetailPage from "@/pages/SolutionDetail";
import { SOLUTIONS, type SolutionId } from "@/lib/solutions";

export const Route = createFileRoute("/solutions/$solutionId")({
  head: ({ params }) => {
    const solution = SOLUTIONS.find((s) => s.id === (params.solutionId as SolutionId));
    const title = solution ? `${solution.title} | AuditDesk` : "Solution | AuditDesk";
    const desc = solution?.value ?? "AuditDesk enterprise security and compliance modules.";
    const path = solution?.slug ?? "/solutions";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  component: function SolutionDetailRoute() {
    const { solutionId } = Route.useParams();
    return <SolutionDetailPage solutionId={solutionId} />;
  },
});
