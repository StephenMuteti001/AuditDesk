import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Pill, Section, SectionHeading } from '@/components/ui/Section';
import { SITE } from '@/lib/site';
import operationsStill from '@/assets/auditdesk-operations-still.jpg';

const VALUES = [
{
  title: 'Built where it is used',
  body: 'AuditDesk is engineered in Nairobi for organisations that answer to the ODPC and the Central Bank of Kenya. Local obligations are the starting point, not a localisation layer.'
},
{
  title: 'Plain answers',
  body: 'We will tell you which problems the product solves and which ones remain a matter of process, policy or professional advice.'
},
{
  title: 'Engineering-led',
  body: 'Deployments are run by the people who build the collectors and correlation rules — not handed to a separate delivery organisation.'
}];


const FACTS = [
{ label: 'Headquarters', value: SITE.address },
{ label: 'Areas served', value: SITE.areaServed.join(' · ') },
{ label: 'Deployment models', value: 'Private cloud (Kenya) · On-premise · Hybrid' },
{ label: 'Focus sectors', value: 'Banking · SACCOs · Insurance · Telco · Public sector' }];


export default function About() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' }]
        }
        title="Enterprise security software, engineered in Nairobi."
        description="AuditDesk exists because the organisations most accountable for their data were served last by the tools meant to protect it. We build for regulated enterprises in Kenya and East Africa — with residency, evidence and local obligations designed in from the first line of code."
        actions={
        <ButtonLink to="/contact" size="lg" variant="inverse">
						Talk to the team
						<ArrowRight />
					</ButtonLink>
        }
        aside={
        <dl data-ev-id="ev_517863ff9b" className="flex flex-col gap-px overflow-hidden rounded-md border border-white/12 bg-white/12">
						{FACTS.map((fact) =>
          <div data-ev-id="ev_19cc4116bf" key={fact.label} className="bg-primary-deep px-5 py-4">
								<dt data-ev-id="ev_6586430f65" className="text-[0.6875rem] uppercase tracking-[0.1em] text-white/45">{fact.label}</dt>
								<dd data-ev-id="ev_a1939ed828" className="mt-1 text-sm font-semibold text-white">{fact.value}</dd>
							</div>
          )}
					</dl>
        } />
      

			<Section>
				<div data-ev-id="ev_985defd496" className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
					<img data-ev-id="ev_a20e745bb7"
          src={operationsStill}
          alt="The AuditDesk engineering and operations team at work in Nairobi"
          loading="lazy"
          decoding="async"
          className="w-full rounded-md border border-border object-cover" />
          
					<div data-ev-id="ev_a2a7dd324e">
						<SectionHeading
              
              title="Because nobody should reconstruct the same incident three times."
              description="Our team spent years inside banks, telcos and public institutions watching security teams, operations teams and auditors each rebuild a version of events from a different system. The data existed. The shared record did not." />
            
						<p data-ev-id="ev_7649705042" className="mt-6 text-base leading-8 text-muted-foreground">
							AuditDesk started as the tooling we wished we had: one pipeline, one evidence store, and scoped
							access so every team reads the same truth from the angle their role requires.
						</p>
						<ButtonLink to="/why-auditdesk" variant="outline" className="mt-8">
							See what changes
							<ArrowRight />
						</ButtonLink>
					</div>
				</div>
			</Section>

			<Section tone="surface">
				<SectionHeading title="Three commitments we hold ourselves to." />
				<div data-ev-id="ev_1086872ab2" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
					{VALUES.map((value, i) =>
          <article data-ev-id="ev_cc1fd7584a" key={value.title} className="bg-background p-7">
							<span data-ev-id="ev_2387e0dd73" className="font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
							<h3 data-ev-id="ev_37b05c206f" className="mt-4 text-base font-bold tracking-tight text-ink">{value.title}</h3>
							<p data-ev-id="ev_cfcd90907b" className="mt-3 text-sm leading-7 text-muted-foreground">{value.body}</p>
						</article>
          )}
				</div>
			</Section>

			<Section>
				<SectionHeading title="Start a conversation." />
				<div data-ev-id="ev_e88d83ed58" className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
					<a data-ev-id="ev_748380ca86" href={`mailto:${SITE.email}`} className="flex flex-col gap-2 bg-surface p-7 transition-colors hover:bg-accent">
						<Mail className="h-5 w-5 text-primary" aria-hidden="true" />
						<span data-ev-id="ev_6ed6e725cb" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">Email</span>
						<span data-ev-id="ev_0479bc7e42" className="text-sm font-semibold text-ink">{SITE.email}</span>
					</a>
					<a data-ev-id="ev_a3caa09143" href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex flex-col gap-2 bg-surface p-7 transition-colors hover:bg-accent">
						<Phone className="h-5 w-5 text-primary" aria-hidden="true" />
						<span data-ev-id="ev_9ae8549b78" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">Phone</span>
						<span data-ev-id="ev_afb89ad9fc" className="text-sm font-semibold text-ink">{SITE.phone}</span>
					</a>
					<div data-ev-id="ev_02c88d349e" className="flex flex-col gap-2 bg-surface p-7">
						<MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
						<span data-ev-id="ev_e8e956fc4a" className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">Office</span>
						<span data-ev-id="ev_f8c0903fd2" className="text-sm font-semibold text-ink">{SITE.address}</span>
					</div>
				</div>
				<div data-ev-id="ev_a89a6983d7" className="mt-8 flex flex-wrap gap-2">
					{SITE.areaServed.map((area) =>
          <Pill key={area}>{area}</Pill>
          )}
				</div>
			</Section>

			<CtaBand secondary={{ label: 'Explore the platform', to: '/platform' }} />
		</>);

}