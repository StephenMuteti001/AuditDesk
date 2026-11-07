import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { ConsoleBlock, Container, Pill } from '@/components/ui/Section';
import { cn } from '@/lib/cn';
import { SOLUTIONS } from '@/lib/solutions';

export function SolutionsGrid({ heading = true }: {heading?: boolean;}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section data-ev-id="ev_400dab39f7" id="suite" className="border-b border-border bg-background py-18 sm:py-22 lg:py-28">
			<Container>
				{heading ?
        <div data-ev-id="ev_9477143849" className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
						<div data-ev-id="ev_c6275d3138" className="flex flex-col gap-4">
							
							<h2 data-ev-id="ev_ac74e38035" className="max-w-2xl text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.75rem]">
								Four modules. One audit trail.
							</h2>
						</div>
						<p data-ev-id="ev_6e981dff77" className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
							Deploy a single module or the full suite. Either way every event lands in the same tamper-evident
							evidence store, so an investigation and an audit read from one source.
						</p>
					</div> :
        null}

				<div data-ev-id="ev_ade87e650f"
        className={cn(
          'grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2',
          heading && 'mt-12'
        )}>
          
					{SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            const isOpen = expanded === solution.id;
            return (
              <article data-ev-id="ev_0c1e142b19"
              key={solution.id}
              id={solution.id}
              className="flex flex-col bg-background p-7 transition-colors hover:bg-surface sm:p-8">
                
								<div data-ev-id="ev_15ed6d4971" className="flex items-start justify-between gap-4">
									<span data-ev-id="ev_0e9b0f5e48" className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
										<Icon className="h-5 w-5" />
									</span>
									<Pill>{solution.badge}</Pill>
								</div>

								<h3 data-ev-id="ev_fcb2134c1e" className="mt-6 text-xl font-bold tracking-tight text-ink">
									<Link data-ev-id="ev_3e5091e1c1" to={solution.slug} className="hover:text-primary">
										{solution.title}
									</Link>
								</h3>
								<p data-ev-id="ev_24abaf7a0b" className="mt-2.5 text-sm leading-6 text-muted-foreground">{solution.value}</p>

								<div data-ev-id="ev_cb6082b8aa" className="mt-6 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
									<div data-ev-id="ev_2336426735">
										<h4 data-ev-id="ev_6cce455d76" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
											The problem
										</h4>
										<p data-ev-id="ev_0c121f6044" className="mt-2.5 text-sm leading-6 text-muted-foreground">{solution.problem}</p>
									</div>
									<div data-ev-id="ev_c4b487aaf1">
										<h4 data-ev-id="ev_8220a8ad1c" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary">
											The outcome
										</h4>
										<p data-ev-id="ev_266d39e443" className="mt-2.5 text-sm leading-6 text-muted-foreground">{solution.outcome}</p>
									</div>
								</div>

								<p data-ev-id="ev_7b4ae202ac" className="mt-5 text-xs text-muted-foreground">
									<span data-ev-id="ev_76a4aeffd6" className="font-semibold text-ink">Built for:</span> {solution.audience}
								</p>

								{isOpen ?
                <div data-ev-id="ev_dfbba7b06e" className="ad-rise mt-6 flex flex-col gap-5">
										<ul data-ev-id="ev_e097b84984" className="flex flex-col gap-2.5">
											{solution.points.map((point) =>
                    <li data-ev-id="ev_eb7a054743" key={point} className="flex items-start gap-2.5 text-sm leading-6 text-ink">
													<Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
													{point}
												</li>
                    )}
										</ul>
										<p data-ev-id="ev_c524fcdeb2" className="text-sm leading-6 text-muted-foreground">
											<span data-ev-id="ev_a4b538dd1b" className="font-semibold text-ink">In practice:</span> {solution.workflow}
										</p>
										<ConsoleBlock lines={solution.preview} />
									</div> :
                null}

								<div data-ev-id="ev_8556fa3642" className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
									<ButtonLink to={solution.slug} size="sm">
										{solution.cta}
										<ArrowRight />
									</ButtonLink>
									<Button
                    variant="ghost"
                    size="sm"
                    className="px-0 text-primary hover:bg-transparent hover:text-primary-deep"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : solution.id)}>
                    
										{isOpen ? 'Show less' : 'Learn More'}
										<ChevronDown className={cn('transition-transform', isOpen && 'rotate-180')} />
									</Button>
								</div>
							</article>);

          })}
				</div>
			</Container>
		</section>);

}