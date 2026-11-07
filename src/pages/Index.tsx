import { Link } from '@tanstack/react-router';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { TeamBenefits } from '@/components/sections/TeamBenefits';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Container, Pill, Section, SectionHeading } from '@/components/ui/Section';
import { PLATFORM_FEATURES, STANDARDS } from '@/lib/compliance';
import { SITE } from '@/lib/site';
import operationsStill from '@/assets/auditdesk-operations-still.jpg';

const SECTORS = [
'Tier 1 & 2 banks',
'SACCOs',
'Insurers',
'Telcos & ISPs',
'Payment providers',
'Government agencies',
'Hospital groups',
'Fintech platforms'];


const STEPS = [
{
  step: '01',
  title: 'Map your sources',
  body: 'We inventory the systems that matter — core banking, databases, cloud workloads, network and identity — and agree how each one will be collected.'
},
{
  step: '02',
  title: 'Normalise and retain',
  body: 'Events are parsed into a single schema and written to hash-chained storage inside your chosen residency boundary.'
},
{
  step: '03',
  title: 'Correlate and act',
  body: 'Rules group related activity into cases, alerts are deduplicated, and privileged sessions are recorded against named approvals.'
},
{
  step: '04',
  title: 'Evidence on request',
  body: 'Auditors, regulators and privacy teams get scoped, read-only access to the exact period and controls under review.'
}];


export default function Index() {

  return (
    <>
			<Hero />

			{/* Sector strip */}
			<section data-ev-id="ev_e257048f57" className="border-b border-border bg-surface py-8">
				<Container>
					<div data-ev-id="ev_c48a08649a" className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
						<p data-ev-id="ev_b761e249c8" className="shrink-0 text-sm font-semibold text-ink">
							Built for regulated enterprises
						</p>
						<div data-ev-id="ev_fd29750b55" className="flex flex-wrap gap-2">
							{SECTORS.map((sector) =>
              <Pill key={sector}>{sector}</Pill>
              )}
						</div>
					</div>
				</Container>
			</section>

			<SolutionsGrid />

			<BeforeAfter compact />

			{/* Platform capabilities */}
			<Section tone="surface" id="platform">
				<div data-ev-id="ev_989d12abf6" className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
					<div data-ev-id="ev_d6109b1804" className="lg:sticky lg:top-28 lg:self-start">
						<SectionHeading
              
              title="Engineered for evidence, not just dashboards."
              description="Collection, normalisation, retention and access control are designed so the record you rely on during an incident is the same one a reviewer can verify months later." />
            
						<img data-ev-id="ev_b9d563f3cd"
            src={operationsStill}
            alt="AuditDesk security operations team reviewing correlated telemetry on a wall display"
            loading="lazy"
            decoding="async"
            className="mt-9 w-full rounded-md border border-border object-cover" />
            
						<ButtonLink to="/platform" variant="outline" size="lg" className="mt-7">
							Explore the platform
							<ArrowRight />
						</ButtonLink>
					</div>

					<div data-ev-id="ev_473b9e7ba7" className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
						{PLATFORM_FEATURES.map((feature) =>
            <div data-ev-id="ev_7e017f870b" key={feature.title} className="bg-background p-6 transition-colors hover:bg-accent">
								<h3 data-ev-id="ev_3cd5246fbe" className="text-base font-bold tracking-tight text-ink">{feature.title}</h3>
								<p data-ev-id="ev_95d6b024f6" className="mt-2.5 text-sm leading-6 text-muted-foreground">{feature.body}</p>
							</div>
            )}
					</div>
				</div>
			</Section>

			{/* How deployment works */}
			<Section id="how-it-works">
				<SectionHeading
          
          title="From source inventory to defensible evidence."
          description="A deployment follows the same four stages whether you start with one module or the full suite." />
        
				<ol data-ev-id="ev_386e0f437e" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
					{STEPS.map((item) =>
          <li data-ev-id="ev_1ebda2ea61" key={item.step} className="flex flex-col gap-3 bg-background p-7">
							<span data-ev-id="ev_3fa951202c" className="font-mono text-xs font-bold text-primary">{item.step}</span>
							<h3 data-ev-id="ev_bea8fc479a" className="text-base font-bold tracking-tight text-ink">{item.title}</h3>
							<p data-ev-id="ev_8d8dda035d" className="text-sm leading-6 text-muted-foreground">{item.body}</p>
						</li>
          )}
				</ol>
				<div data-ev-id="ev_8b90277224" className="mt-10">
					<ButtonLink to="/contact" size="lg">
						Start with a source review
						<ArrowRight />
					</ButtonLink>
				</div>
			</Section>

			<TeamBenefits />

			{/* Compliance coverage */}
			<Section tone="surface" id="compliance">
				<div data-ev-id="ev_06915bc09d" className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
					<SectionHeading
            
            title="Evidence mapped to the obligations you already report against." />
          
					<p data-ev-id="ev_9af9ca05a6" className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
						AuditDesk supports evidence gathering for these frameworks. Certification remains an assessment of
						your organisation — we make the underlying record easier to produce and defend.
					</p>
				</div>

				<div data-ev-id="ev_ca64b3a80b" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
					{STANDARDS.map((standard) =>
          <article data-ev-id="ev_9dac6cafcc" key={standard.id} className="flex flex-col bg-background p-7">
							<ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
							<h3 data-ev-id="ev_f734aec0d9" className="mt-5 text-base font-bold tracking-tight text-ink">{standard.abbr}</h3>
							<p data-ev-id="ev_fe0684449a" className="mt-1 text-xs text-muted-foreground">{standard.authority}</p>
							<p data-ev-id="ev_6888af9336" className="mt-4 text-sm leading-6 text-muted-foreground">{standard.note}</p>
							<ul data-ev-id="ev_b55d943bea" className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
								{standard.controls.slice(0, 2).map((control) =>
              <li data-ev-id="ev_acd13ecdfc" key={control.ref} className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
										<Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
										<span data-ev-id="ev_067899d7fe">
											<span data-ev-id="ev_b6a837890a" className="font-mono font-semibold text-ink">{control.ref}</span> ·{' '}
											{control.requirement}
										</span>
									</li>
              )}
							</ul>
							<Link data-ev-id="ev_b7988b4995"
            to="/compliance"
            className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary hover:text-primary-deep">
              
								See control mapping
								<ArrowRight className="h-4 w-4" />
							</Link>
						</article>
          )}
				</div>

				<div data-ev-id="ev_1fdb9a7737" className="mt-10 flex flex-wrap items-center gap-4">
					<p data-ev-id="ev_fb8cf947a2" className="text-sm text-muted-foreground">
						Bring your current control list — we will show where the evidence would come from.
					</p>
					<ButtonLink to="/contact" size="sm">
						Book a control walkthrough
						<ArrowRight />
					</ButtonLink>
				</div>
			</Section>

			<CtaBand secondary={{ label: 'See the full suite', to: '/solutions' }} />
		</>);

}