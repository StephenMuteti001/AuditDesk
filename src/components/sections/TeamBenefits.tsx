import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container, Pill } from '@/components/ui/Section';
import { cn } from '@/lib/cn';
import { TEAMS } from '@/lib/teams';

export function TeamBenefits() {
  const [activeId, setActiveId] = useState(TEAMS[0]!.id);
  const team = TEAMS.find((t) => t.id === activeId) ?? TEAMS[0]!;
  const ActiveIcon = team.icon;

  return (
    <section data-ev-id="ev_655bc4b83e" id="teams" className="border-b border-border bg-background py-18 sm:py-22 lg:py-28">
			<Container>
				<div data-ev-id="ev_e1d331c452" className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
					<div data-ev-id="ev_42c923cf3f" className="flex flex-col gap-4">
						
						<h2 data-ev-id="ev_fc91ce1191" className="max-w-2xl text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.75rem]">
							One shared record.
							<span data-ev-id="ev_53ca94f66d" className="block text-muted-foreground">A different advantage for every role.</span>
						</h2>
					</div>
					<p data-ev-id="ev_2af29ee34e" className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
						From board-level oversight to the engineer on call, AuditDesk brings context to the decisions your
						people make every day. Select a role to see what changes for them.
					</p>
				</div>

				<div data-ev-id="ev_c80cdff248" className="mt-12 grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-14">
					<div data-ev-id="ev_9cfae3f100"
          role="tablist"
          aria-label="Company teams"
          className="scrollbar-inverse -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            
						{TEAMS.map((item) => {
              const Icon = item.icon;
              const selected = item.id === activeId;
              return (
                <button data-ev-id="ev_60de2454b4"
                key={item.id}
                type="button"
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls="team-detail"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors lg:w-full lg:shrink',
                  selected ?
                  'border-primary/30 bg-primary/5 text-primary' :
                  'border-border bg-background text-muted-foreground hover:border-primary/25 hover:text-ink'
                )}>
                  
									<Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
									<span data-ev-id="ev_c9c1522d81" className="whitespace-nowrap lg:whitespace-normal">{item.name}</span>
								</button>);

            })}
					</div>

					<div data-ev-id="ev_61231505df"
          id="team-detail"
          role="tabpanel"
          aria-labelledby={`tab-${team.id}`}
          key={team.id}
          className="ad-rise min-w-0 rounded-md border border-border bg-surface p-7 sm:p-9">
            
						<div data-ev-id="ev_7b12d075bf" className="flex flex-wrap items-center gap-3">
							<span data-ev-id="ev_5522bcb41f" className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-background text-primary">
								<ActiveIcon className="h-5 w-5" />
							</span>
							<p data-ev-id="ev_de27eeda7e" className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary">
								For {team.name}
							</p>
							<Pill className="ml-auto">{team.role}</Pill>
						</div>

						<h3 data-ev-id="ev_a72de5e51f" className="mt-6 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{team.title}</h3>

						<div data-ev-id="ev_2e42c5aeb3" className="mt-7 grid gap-7 sm:grid-cols-2">
							<div data-ev-id="ev_24d33057b4">
								<h4 data-ev-id="ev_4387bc9e60" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
									The challenge
								</h4>
								<p data-ev-id="ev_1e226c0f0e" className="mt-3 text-sm leading-7 text-muted-foreground">{team.problem}</p>
							</div>
							<div data-ev-id="ev_cb1db9147b">
								<h4 data-ev-id="ev_418e6ae4f1" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary">
									The AuditDesk advantage
								</h4>
								<p data-ev-id="ev_d48ed490a4" className="mt-3 text-sm leading-7 text-muted-foreground">{team.benefit}</p>
							</div>
						</div>

						<ul data-ev-id="ev_39068ca3ed" className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
							{team.points.map((point) =>
              <li data-ev-id="ev_996c7f01e8" key={point} className="flex items-start gap-3 text-sm leading-6 text-ink">
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
									{point}
								</li>
              )}
						</ul>

						<p data-ev-id="ev_21f1b8d082" className="mt-6 text-xs text-muted-foreground">
							Relevant modules: <span data-ev-id="ev_01d70918e4" className="font-semibold text-ink">{team.modules.join(' · ')}</span>
						</p>

						<ButtonLink to="/contact" className="mt-7" size="lg">
							{team.cta}
							<ArrowRight />
						</ButtonLink>
					</div>
				</div>
			</Container>
		</section>);

}