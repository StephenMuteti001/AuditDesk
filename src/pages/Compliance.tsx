import { ArrowRight, FileCheck2 } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Pill, Section, SectionHeading } from '@/components/ui/Section';
import { STANDARDS } from '@/lib/compliance';
import { SITE } from '@/lib/site';

export default function Compliance() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Compliance Standards', to: '/compliance' }]
        }
        title="The evidence, already mapped to the control."
        description="Audit preparation should not begin with four separate export requests. Each framework below lists the requirement and the AuditDesk record that supports it."
        actions={
        <>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							Book a control walkthrough
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/platform" size="lg" variant="outlineInverse">
							How evidence is stored
						</ButtonLink>
					</>
        }
        aside={
        <div data-ev-id="ev_b8c64b44a0" className="rounded-md border border-white/15 bg-white/5 p-6">
						<FileCheck2 className="h-6 w-6 text-primary" aria-hidden="true" />
						<p data-ev-id="ev_89dd74c7da" className="mt-4 text-sm leading-7 text-white/70">
							AuditDesk supports evidence gathering. Certification and regulatory interpretation remain an
							assessment of your organisation, performed by your assessor or counsel.
						</p>
					</div>
        } />
      

			{STANDARDS.map((standard, index) =>
      <Section key={standard.id} id={standard.id} tone={index % 2 === 0 ? 'default' : 'surface'}>
					<div data-ev-id="ev_3f601633ea" className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
						<div data-ev-id="ev_84b37d9869" className="lg:sticky lg:top-28 lg:self-start">
							<Pill tone="primary">{standard.abbr}</Pill>
							<h2 data-ev-id="ev_9442be0d5c" className="mt-5 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
								{standard.name}
							</h2>
							<p data-ev-id="ev_ef9e6bb7d8" className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
								{standard.authority}
							</p>
							<p data-ev-id="ev_a919a51f59" className="mt-5 text-sm leading-7 text-muted-foreground">{standard.note}</p>
							<ButtonLink to="/contact" variant="outline" size="sm" className="mt-7">
								Discuss {standard.abbr} evidence
								<ArrowRight />
							</ButtonLink>
						</div>

						<div data-ev-id="ev_b6c48a1995" className="min-w-0 overflow-hidden rounded-md border border-border">
							<div data-ev-id="ev_7012f65d34" className="hidden grid-cols-[6rem_1fr_1.4fr] gap-4 border-b border-border bg-surface px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:grid">
								<span data-ev-id="ev_9ccb792e53">Ref</span>
								<span data-ev-id="ev_6df84e4f14">Requirement</span>
								<span data-ev-id="ev_de06fb0165">AuditDesk evidence</span>
							</div>
							{standard.controls.map((control) =>
            <div data-ev-id="ev_1454543945"
            key={control.ref}
            className="grid gap-2 border-b border-border bg-background px-6 py-5 last:border-b-0 sm:grid-cols-[6rem_1fr_1.4fr] sm:gap-4">
              
									<span data-ev-id="ev_56ff51de02" className="font-mono text-xs font-bold text-primary">{control.ref}</span>
									<span data-ev-id="ev_0095883c36" className="text-sm font-semibold leading-6 text-ink">{control.requirement}</span>
									<span data-ev-id="ev_c0c80391d4" className="text-sm leading-6 text-muted-foreground">{control.evidence}</span>
								</div>
            )}
						</div>
					</div>
				</Section>
      )}

			<Section>
				<SectionHeading
          
          title="Give auditors evidence, not administrator keys."
          description="Reviewer roles are read-only and scoped to a defined period and control set. Every access by a reviewer is itself recorded." />
        
				<div data-ev-id="ev_dbee7f1b62" className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
					{[
          { title: 'Scoped by period', body: 'Access is limited to the review window — not the full history.' },
          { title: 'Read-only by design', body: 'Reviewers cannot alter, delete or re-run the underlying records.' },
          { title: 'Self-auditing', body: 'Reviewer queries are logged like any other privileged activity.' }].
          map((item) =>
          <div data-ev-id="ev_9cf1d27384" key={item.title} className="bg-surface p-7">
							<h3 data-ev-id="ev_c0bcee2981" className="text-base font-bold tracking-tight text-ink">{item.title}</h3>
							<p data-ev-id="ev_92c7c0ac1b" className="mt-2.5 text-sm leading-6 text-muted-foreground">{item.body}</p>
						</div>
          )}
				</div>
			</Section>

			<CtaBand
        title="Bring your control list to the next conversation."
        description="We will walk through each requirement and show the AuditDesk record that supports it — including where you would still need a process rather than a product."
        secondary={{ label: 'Explore solutions', to: '/solutions' }} />
      
		</>);

}