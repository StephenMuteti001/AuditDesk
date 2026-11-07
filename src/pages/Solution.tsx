import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Pill, Section, SectionHeading } from '@/components/ui/Section';
import { SOLUTIONS } from '@/lib/solutions';

export default function Solutions() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Solutions', to: '/solutions' }]
        }
        title="Deploy one module. Or the whole picture."
        description="Each AuditDesk module solves a specific visibility gap. Together they remove the handoffs between the team that detects an issue, the team that fixes it and the team that has to evidence it."
        actions={
        <>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							Scope your deployment
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/platform" size="lg" variant="outlineInverse">
							Platform architecture
						</ButtonLink>
					</>
        }
        aside={
        <ul data-ev-id="ev_59508a6181" className="flex flex-col gap-px overflow-hidden rounded-md border border-white/12 bg-white/12">
						{SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <li data-ev-id="ev_9980118442" key={solution.id}>
									<a data-ev-id="ev_8f3e9de818"
                href={`#${solution.id}`}
                className="flex items-center gap-3 bg-primary-deep px-5 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:bg-primary-deeper hover:text-white">
                  
										<Icon className="h-4 w-4 text-primary" aria-hidden="true" />
										{solution.title}
										<ArrowRight className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
									</a>
								</li>);

          })}
					</ul>
        } />
      

			<SolutionsGrid heading={false} />

			<Section tone="surface">
				<SectionHeading
          
          title="Where most organisations begin."
          description="There is no requirement to deploy everything at once. The evidence store is shared, so modules added later enrich the same record." />
        
				<div data-ev-id="ev_c4c09fc649" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
					{SOLUTIONS.map((solution) =>
          <div data-ev-id="ev_7fd23ee88f" key={solution.id} className="flex flex-col gap-4 bg-background p-7">
							<div data-ev-id="ev_a9b6483d53" className="flex flex-wrap items-center gap-3">
								<Pill tone="primary">{solution.badge}</Pill>
								<span data-ev-id="ev_5feb24ecc2" className="text-xs text-muted-foreground">{solution.audience}</span>
							</div>
							<p data-ev-id="ev_3d65be8498" className="text-lg font-semibold leading-7 tracking-tight text-ink">{solution.headline}</p>
							<p data-ev-id="ev_387c25edbf" className="text-sm leading-6 text-muted-foreground">{solution.workflow}</p>
							<div data-ev-id="ev_66dee0747b" className="flex flex-wrap gap-2 pt-1">
								{solution.standards.map((standard) =>
              <Pill key={standard}>{standard}</Pill>
              )}
							</div>
							<ButtonLink to={solution.slug} variant="outline" size="sm" className="mt-2 self-start">
								{solution.cta}
								<ArrowRight />
							</ButtonLink>
						</div>
          )}
				</div>
			</Section>

			<CtaBand
        title="Not sure which module to start with?"
        description="Describe the gap you feel most often — an investigation that took too long, an access question you could not answer, an audit that consumed a week. We will recommend a starting scope."
        secondary={{ label: 'Compare before & after', to: '/why-auditdesk' }} />
      
		</>);

}