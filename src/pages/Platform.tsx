import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { ConsoleBlock, Pill, Section, SectionHeading } from '@/components/ui/Section';
import { PLATFORM_FEATURES } from '@/lib/compliance';
import { SOLUTIONS } from '@/lib/solutions';
import operationsStill from '@/assets/auditdesk-operations-still.jpg';

const LAYERS = [
{
  name: 'Collection',
  body: 'Agent and agentless collectors for Syslog, Kafka, REST, webhooks, Windows Event Log, cloud audit trails and database engines.',
  items: ['500+ parsers', 'Agent or agentless', 'Backpressure-safe buffering']
},
{
  name: 'Normalisation',
  body: 'Every event is mapped to a shared schema with consistent identity, host, action and resource fields so one query spans all sources.',
  items: ['Unified event schema', 'Identity resolution', 'Sensitive-field tagging']
},
{
  name: 'Correlation',
  body: 'Rules mapped to MITRE ATT&CK group related activity into cases, while deduplication and suppression windows reduce alert volume.',
  items: ['ATT&CK-aligned rules', 'Case grouping', 'Noise suppression']
},
{
  name: 'Evidence store',
  body: 'Hash-chained, time-stamped archives with verification, retained for up to seven years inside your chosen residency boundary.',
  items: ['Tamper-evident chain', '7-year retention', 'Kenya or on-premise']
},
{
  name: 'Access control',
  body: 'Role-based, time-scoped access to evidence — including read-only reviewer roles whose own queries are recorded.',
  items: ['Role-based roles', 'Scoped reviewer access', 'Self-auditing reads']
}];


const DEPLOYMENT = [
{ title: 'Private cloud (Kenya)', body: 'Managed by AuditDesk inside in-country data centres, with residency guarantees in contract.' },
{ title: 'On-premise', body: 'Installed in your own data centre or private cloud where regulation or policy requires it.' },
{ title: 'Hybrid', body: 'Collection on-premise with a managed analysis plane, or the reverse — scoped during design.' }];


export default function Platform() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Platform', to: '/platform' }]
        }
        title="One pipeline from raw signal to defensible evidence."
        description="Five layers sit between a log line on a server and a reviewer who needs to trust it months later. AuditDesk owns all of them so nothing is lost at a handoff."
        actions={
        <>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							Request an architecture review
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/compliance" size="lg" variant="outlineInverse">
							Control mapping
						</ButtonLink>
					</>
        }
        aside={
        <ConsoleBlock
          className="border-white/15"
          lines={[
          'ingest    syslog · kafka · rest · agent',
          'normalise schema=auditdesk.v2  fields=42',
          'correlate rules=318  attck=aligned',
          'retain    sha-256 chain  ttl=7y  region=ke',
          'serve     role=auditor  scope=2026-Q3  ro']
          } />

        } />
      

			<Section>
				<SectionHeading title="The five layers." />
				<ol data-ev-id="ev_0b075f3125" className="mt-12 flex flex-col gap-px overflow-hidden rounded-md border border-border bg-border">
					{LAYERS.map((layer, i) =>
          <li data-ev-id="ev_81222dc2d4" key={layer.name} className="grid gap-5 bg-background p-7 lg:grid-cols-[14rem_1fr_16rem] lg:gap-10">
							<div data-ev-id="ev_505e06f678" className="flex items-baseline gap-3">
								<span data-ev-id="ev_d611fd21cf" className="font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
								<h3 data-ev-id="ev_e98d7bc52d" className="text-lg font-bold tracking-tight text-ink">{layer.name}</h3>
							</div>
							<p data-ev-id="ev_119c176eef" className="text-sm leading-7 text-muted-foreground">{layer.body}</p>
							<div data-ev-id="ev_3c352b14a9" className="flex flex-wrap gap-2 lg:justify-end">
								{layer.items.map((item) =>
              <Pill key={item}>{item}</Pill>
              )}
							</div>
						</li>
          )}
				</ol>
			</Section>

			<Section tone="surface">
				<div data-ev-id="ev_c798978b6a" className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
					<div data-ev-id="ev_add78da4f2">
						<SectionHeading
              
              title="What every module inherits."
              description="These are not add-ons. Whichever module you deploy first, it arrives with the same foundations." />
            
						<div data-ev-id="ev_f2f9c9fbe1" className="mt-9 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
							{PLATFORM_FEATURES.map((feature) =>
              <div data-ev-id="ev_a0ad01c1e6" key={feature.title} className="bg-background p-6">
									<h3 data-ev-id="ev_9c9348df2d" className="text-sm font-bold tracking-tight text-ink">{feature.title}</h3>
									<p data-ev-id="ev_f3056752ba" className="mt-2 text-sm leading-6 text-muted-foreground">{feature.body}</p>
								</div>
              )}
						</div>
					</div>
					<img data-ev-id="ev_25efd00849"
          src={operationsStill}
          alt="Engineers monitoring correlated telemetry inside an AuditDesk security operations centre"
          loading="lazy"
          decoding="async"
          className="w-full rounded-md border border-border object-cover" />
          
				</div>
			</Section>

			<Section>
				<SectionHeading
          
          title="Where your data lives is your decision."
          description="Residency is agreed during design and written into the contract — not discovered later in a support ticket." />
        
				<div data-ev-id="ev_118028f6db" className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
					{DEPLOYMENT.map((option) =>
          <div data-ev-id="ev_a61f83760b" key={option.title} className="bg-surface p-7">
							<h3 data-ev-id="ev_96fac3d814" className="text-base font-bold tracking-tight text-ink">{option.title}</h3>
							<p data-ev-id="ev_39c259f2c2" className="mt-2.5 text-sm leading-6 text-muted-foreground">{option.body}</p>
						</div>
          )}
				</div>

				<div data-ev-id="ev_330d2942bf" className="mt-12 flex flex-wrap gap-3">
					{SOLUTIONS.map((solution) =>
          <ButtonLink key={solution.id} to={solution.slug} variant="outline" size="sm">
							{solution.title}
							<ArrowRight />
						</ButtonLink>
          )}
				</div>
			</Section>

			<CtaBand
        title="Walk the architecture with our engineers."
        description="Bring your environment diagram. We will map collection points, residency boundaries and the evidence each layer would produce."
        primaryLabel="Request an architecture review"
        secondary={{ label: 'See the modules', to: '/solutions' }} />
      
		</>);

}