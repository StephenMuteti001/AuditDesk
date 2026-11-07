import { ArrowRight, Check, Minus } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';
import { COMPARISONS } from '@/lib/compliance';

/**
 * Editorial before / after comparison.
 * Dark, typographic and row-driven — the statement carries the weight, not the chrome.
 */
export function BeforeAfter({ compact = false }: {compact?: boolean;}) {
  const rows = compact ? COMPARISONS.slice(0, 4) : COMPARISONS;

  return (
    <section data-ev-id="ev_5a4c94a60e" id="before-after" className="relative isolate overflow-hidden border-b border-white/10 bg-primary-deep">
			<Container className="relative py-18 sm:py-22 lg:py-28">
				<div data-ev-id="ev_cb99e2930a" className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
					{/* Sticky editorial column */}
					<div data-ev-id="ev_04eb24cc97" className="lg:sticky lg:top-28 lg:self-start">
						<h2 data-ev-id="ev_104b1952fe" className="text-[2rem] font-extrabold leading-[1.06] tracking-[-0.032em] text-white sm:text-[2.75rem]">
							From disconnected signals
							<span data-ev-id="ev_1f0cf8f56a" className="block text-white/45">to shared understanding.</span>
						</h2>
						<p data-ev-id="ev_9bf70f780d" className="mt-6 max-w-md text-base leading-7 text-white/65">
							Security, operations and compliance should not have to reconstruct the same story three times.
							Connect the activity, the access and the evidence.
						</p>
						<div data-ev-id="ev_23e1467297" className="mt-8 flex flex-wrap gap-3">
							<ButtonLink to="/contact" variant="inverse" size="lg">
								Find your starting point
								<ArrowRight />
							</ButtonLink>
							{compact ?
              <ButtonLink to="/why-auditdesk" variant="outlineInverse" size="lg">
									See the full picture
								</ButtonLink> :
              null}
						</div>
					</div>

					{/* Comparison rows */}
					<div data-ev-id="ev_ebd2fda596" className="min-w-0">
						<div data-ev-id="ev_d6e78585ff" className="hidden grid-cols-2 gap-10 border-b border-white/15 pb-4 sm:grid">
							<h3 data-ev-id="ev_b7e6926f6f" className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Before AuditDesk</h3>
							<h3 data-ev-id="ev_796056c7cf" className="text-xs font-bold uppercase tracking-[0.16em] text-success">After AuditDesk</h3>
						</div>

						<ul data-ev-id="ev_1cd4939baa" className="flex flex-col">
							{rows.map((row, index) =>
              <li data-ev-id="ev_68160b925d"
              key={row.topic}
              className="group border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03]">
                
									<div data-ev-id="ev_2971fba74a" className="mb-4 flex items-baseline gap-3">
										<span data-ev-id="ev_b8ab1bf103" className="font-mono text-xs text-white/30">
											{String(index + 1).padStart(2, '0')}
										</span>
										<span data-ev-id="ev_02a9f05a27" className="text-sm font-semibold tracking-tight text-white">{row.topic}</span>
									</div>
									<div data-ev-id="ev_1a2381d237" className="grid gap-5 sm:grid-cols-2 sm:gap-10">
										<p data-ev-id="ev_19f0ccf905" className="flex gap-3 text-sm leading-6 text-white/45">
											<Minus className="mt-1 h-4 w-4 shrink-0 text-white/30" aria-hidden="true" />
											<span data-ev-id="ev_ed4abdc587">
												<span data-ev-id="ev_b5f1206f71" className="font-semibold text-white/55 sm:hidden">Before: </span>
												{row.before}
											</span>
										</p>
										<p data-ev-id="ev_b5b13ddb7c" className="flex gap-3 text-sm leading-6 text-white/85">
											<Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
											<span data-ev-id="ev_3042cdbd89">
												<span data-ev-id="ev_ca406697ae" className="font-semibold text-success sm:hidden">After: </span>
												{row.after}
											</span>
										</p>
									</div>
								</li>
              )}
						</ul>

						<p data-ev-id="ev_b15792f086" className="mt-7 max-w-xl text-sm leading-6 text-white/50">
							Start with the gap that matters most to your organisation. Add connected modules as your needs
							evolve — the evidence store stays the same.
						</p>
					</div>
				</div>
			</Container>
		</section>);

}