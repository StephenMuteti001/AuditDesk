import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { TeamBenefits } from '@/components/sections/TeamBenefits';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Pill, Section, SectionHeading } from '@/components/ui/Section';
import { TEAMS } from '@/lib/teams';

export default function Teams() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'For Every Team', to: '/teams' }]
        }
        title="Nine roles. One record. A different answer for each of them."
        description="A platform only earns its place when it changes somebody's day. Here is what AuditDesk changes — role by role, from the boardroom to the engineer holding the pager."
        actions={
        <ButtonLink to="/contact" size="lg" variant="inverse">
						Book a role-specific walkthrough
						<ArrowRight />
					</ButtonLink>
        }
        aside={
        <div data-ev-id="ev_eff23bf901" className="flex flex-wrap gap-2">
						{TEAMS.map((team) =>
          <Pill key={team.id} tone="inverse">
								{team.name}
							</Pill>
          )}
					</div>
        } />
      

			<TeamBenefits />

			<Section tone="surface">
				<SectionHeading
          
          title="Every role, side by side."
          description="Use this as a briefing sheet when you take AuditDesk to the rest of your organisation." />
        
				<div data-ev-id="ev_7da60ad913" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
					{TEAMS.map((team) => {
            const Icon = team.icon;
            return (
              <article data-ev-id="ev_0604b0b0b5" key={team.id} className="flex flex-col bg-background p-7 sm:p-8">
								<div data-ev-id="ev_1b254fa5e2" className="flex items-center gap-3">
									<span data-ev-id="ev_9d2b7f43e0" className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
										<Icon className="h-5 w-5" aria-hidden="true" />
									</span>
									<div data-ev-id="ev_00f6abdd3c">
										<h3 data-ev-id="ev_610a0025f7" className="text-base font-bold tracking-tight text-ink">For {team.name}</h3>
										<p data-ev-id="ev_ae58df0792" className="text-xs text-muted-foreground">{team.role}</p>
									</div>
								</div>

								<p data-ev-id="ev_84223409f6" className="mt-5 text-lg font-semibold leading-7 tracking-tight text-ink">{team.title}</p>
								<p data-ev-id="ev_42e2513444" className="mt-3 text-sm leading-7 text-muted-foreground">{team.problem}</p>
								<p data-ev-id="ev_7d9f5d5516" className="mt-3 text-sm leading-7 text-muted-foreground">{team.benefit}</p>

								<ul data-ev-id="ev_14e909f81f" className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
									{team.points.map((point) =>
                  <li data-ev-id="ev_a9accefb0b" key={point} className="flex items-start gap-2.5 text-sm leading-6 text-ink">
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
											{point}
										</li>
                  )}
								</ul>

								<div data-ev-id="ev_923b601e3a" className="mt-5 flex flex-wrap gap-2">
									{team.modules.map((module) =>
                  <Pill key={module}>{module}</Pill>
                  )}
								</div>

								<ButtonLink to="/contact" variant="outline" size="sm" className="mt-7 self-start">
									{team.cta}
									<ArrowRight />
								</ButtonLink>
							</article>);

          })}
				</div>
			</Section>

			<CtaBand
        title="Bring the team that needs convincing."
        description="We will run the walkthrough against their questions — board oversight, architecture, on-call noise, audit scope or commercial fit."
        secondary={{ label: 'See before & after', to: '/why-auditdesk' }} />
      
		</>);

}