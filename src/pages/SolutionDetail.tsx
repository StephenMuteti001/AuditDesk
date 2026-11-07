import { Navigate } from '@tanstack/react-router';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { ConsoleBlock, Pill, Section, SectionHeading } from '@/components/ui/Section';
import { SOLUTIONS, type SolutionId } from '@/lib/solutions';
import { TEAMS } from '@/lib/teams';

export default function SolutionDetail({ solutionId }: { solutionId: string }) {
  const solution = SOLUTIONS.find((s) => s.id === solutionId as SolutionId);


  if (!solution) return <Navigate to="/solutions" replace />;

  const Icon = solution.icon;
  const relatedTeams = TEAMS.filter((team) => team.modules.includes(solution.short)).slice(0, 4);

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Solutions', to: '/solutions' },
        { label: solution.title, to: solution.slug }]
        }
        title={solution.headline}
        description={solution.value}
        actions={
        <>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							{solution.cta}
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/compliance" size="lg" variant="outlineInverse">
							Control mapping
						</ButtonLink>
					</>
        }
        aside={<ConsoleBlock lines={solution.preview} className="border-white/15" />} />
      

			{/* Problem / outcome */}
			<Section>
				<div data-ev-id="ev_255b2a2c68" className="grid gap-10 lg:grid-cols-[auto_1fr_1fr] lg:gap-14">
					<span data-ev-id="ev_60824bc4c7" className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
						<Icon className="h-6 w-6" aria-hidden="true" />
					</span>
					<div data-ev-id="ev_89d10f71cb">
						<h2 data-ev-id="ev_b8855e2740" className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">The problem</h2>
						<p data-ev-id="ev_61671dffd1" className="mt-4 text-base leading-8 text-ink sm:text-lg">{solution.problem}</p>
					</div>
					<div data-ev-id="ev_e27d42160a">
						<h2 data-ev-id="ev_93854952dc" className="text-xs font-bold uppercase tracking-[0.14em] text-primary">What changes</h2>
						<p data-ev-id="ev_78e3034999" className="mt-4 text-base leading-8 text-ink sm:text-lg">{solution.outcome}</p>
					</div>
				</div>

				<dl data-ev-id="ev_daa46e9748" className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
					{solution.signals.map((signal) =>
          <div data-ev-id="ev_b8d7936a80" key={signal.label} className="bg-surface px-6 py-5">
							<dt data-ev-id="ev_5c76b34a42" className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
								{signal.label}
							</dt>
							<dd data-ev-id="ev_f72a22dc19" className="mt-1.5 text-xl font-bold tracking-tight text-ink">{signal.value}</dd>
						</div>
          )}
				</dl>
			</Section>

			{/* Capabilities */}
			<Section tone="surface">
				<SectionHeading
          
          title={`What ${solution.badge} actually does`}
          description={solution.workflow} />
        
				<div data-ev-id="ev_e179e66006" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
					{solution.capabilities.map((capability, i) =>
          <article data-ev-id="ev_85691461cd" key={capability.title} className="bg-background p-7 sm:p-8">
							<span data-ev-id="ev_8a43baea9f" className="font-mono text-xs font-bold text-primary">
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 data-ev-id="ev_e0808b0e3a" className="mt-4 text-lg font-bold tracking-tight text-ink">{capability.title}</h3>
							<p data-ev-id="ev_64b4230836" className="mt-3 text-sm leading-7 text-muted-foreground">{capability.body}</p>
						</article>
          )}
				</div>

				<ul data-ev-id="ev_81011358e7" className="mt-10 grid gap-3 sm:grid-cols-2">
					{solution.points.map((point) =>
          <li data-ev-id="ev_5745d1fc14" key={point} className="flex items-start gap-3 text-sm leading-6 text-ink">
							<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
							{point}
						</li>
          )}
				</ul>
			</Section>

			{/* Who benefits + standards */}
			<Section>
				<div data-ev-id="ev_0bd23d2e61" className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
					<div data-ev-id="ev_4e11dc8e7a">
						<SectionHeading title="The teams this module changes the day for." />
						<div data-ev-id="ev_2e5334386c" className="mt-9 flex flex-col gap-px overflow-hidden rounded-md border border-border bg-border">
							{relatedTeams.map((team) => {
                const TeamIcon = team.icon;
                return (
                  <div data-ev-id="ev_5eb936994a" key={team.id} className="flex gap-4 bg-background p-6">
										<TeamIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
										<div data-ev-id="ev_7a1ace020f">
											<h3 data-ev-id="ev_4726861d2d" className="text-sm font-bold tracking-tight text-ink">{team.name}</h3>
											<p data-ev-id="ev_000562d8c0" className="mt-2 text-sm leading-6 text-muted-foreground">{team.benefit}</p>
										</div>
									</div>);

              })}
						</div>
						<ButtonLink to="/teams" variant="outline" className="mt-7">
							See every role
							<ArrowRight />
						</ButtonLink>
					</div>

					<div data-ev-id="ev_c06944d708" className="rounded-md border border-border bg-surface p-7">
						<h2 data-ev-id="ev_250a07a601" className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Supports evidence for</h2>
						<div data-ev-id="ev_354b5d8aee" className="mt-5 flex flex-wrap gap-2">
							{solution.standards.map((standard) =>
              <Pill key={standard} tone="primary">
									{standard}
								</Pill>
              )}
						</div>
						<p data-ev-id="ev_17762fab00" className="mt-6 text-sm leading-7 text-muted-foreground">
							Software supports evidence gathering; certification remains an assessment of your organisation and
							its practices.
						</p>
						<ButtonLink to="/compliance" size="sm" className="mt-6">
							View control mapping
							<ArrowRight />
						</ButtonLink>
					</div>
				</div>
			</Section>

			<CtaBand
        title={`Talk through ${solution.title} for your estate.`}
        description="Bring your source inventory, your review calendar or simply the question you cannot currently answer. We will show you where the evidence would come from."
        primaryLabel={solution.cta}
        secondary={{ label: 'Back to all solutions', to: '/solutions' }} />
      
		</>);

}