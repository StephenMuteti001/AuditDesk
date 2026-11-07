import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { CtaBand } from '@/components/sections/CtaBand';
import { ButtonLink } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';

const PRINCIPLES = [
{
  title: 'One record, many readers',
  body: 'Security, operations, legal and audit should not each maintain their own version of events. AuditDesk keeps a single evidence store and controls who can read which slice of it.'
},
{
  title: 'Evidence you can defend',
  body: 'Hash-chained archives and verifiable timestamps mean a reviewer can confirm the record has not changed since collection — not simply take an export at face value.'
},
{
  title: 'Residency on your terms',
  body: 'Deploy in Kenyan data centres or fully on-premise. Where your data lives should be a decision, not a side effect of the tool you chose.'
},
{
  title: 'Noise is a design problem',
  body: 'A platform that pages an engineer for every duplicate signal has failed. Correlation, suppression and dependency awareness are built in, not bolted on.'
},
{
  title: 'Start where it hurts',
  body: 'Modules are useful alone and better together. You are not asked to replace four systems before you see the first result.'
},
{
  title: 'Honest about scope',
  body: 'Software supports evidence gathering. Certification, legal advice and regulatory interpretation stay with the people qualified to give them.'
}];


const COSTS = [
{ label: 'Hours spent reconstructing one incident timeline', before: 'Days', after: 'Minutes to first context' },
{ label: 'Teams involved before an audit export is agreed', before: '4+', after: '1 scoped reviewer role' },
{ label: 'Standing production administrators', before: 'Many, permanent', after: 'Zero, by default' },
{ label: 'Questions you cannot answer about data access', before: 'Several', after: 'A reviewable record' }];


export default function WhyAuditDesk() {

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Why AuditDesk', to: '/why-auditdesk' }]
        }
        title="The cost of a story told four different ways."
        description="Most organisations do not lack data. They lack one account of what happened that security, operations, legal and audit can all stand behind. This is what changes when they share it."
        actions={
        <>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							Find your starting point
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/teams" size="lg" variant="outlineInverse">
							Benefits by role
						</ButtonLink>
					</>
        }
        aside={
        <dl data-ev-id="ev_1f4736807c" className="flex flex-col gap-px overflow-hidden rounded-md border border-white/12 bg-white/12">
						{COSTS.map((cost) =>
          <div data-ev-id="ev_999d750511" key={cost.label} className="bg-primary-deep px-5 py-4">
								<dt data-ev-id="ev_ae93569ee7" className="text-[0.6875rem] uppercase tracking-[0.1em] text-white/45">{cost.label}</dt>
								<dd data-ev-id="ev_07b8377750" className="mt-1.5 flex items-center gap-3 text-sm">
									<span data-ev-id="ev_76c6f02b6b" className="text-white/45 line-through decoration-white/25">{cost.before}</span>
									<ArrowRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
									<span data-ev-id="ev_806bbea571" className="font-semibold text-white">{cost.after}</span>
								</dd>
							</div>
          )}
					</dl>
        } />
      

			<BeforeAfter />

			<Section>
				<SectionHeading
          
          title="Six principles behind the product."
          description="These shaped every decision in the platform — including the things we deliberately left out." />
        
				<div data-ev-id="ev_4601eb04cb" className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{PRINCIPLES.map((principle, i) =>
          <article data-ev-id="ev_1edb21b5dd" key={principle.title} className="bg-background p-7">
							<span data-ev-id="ev_7c1d05e1fa" className="font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
							<h3 data-ev-id="ev_d555c63166" className="mt-4 text-base font-bold tracking-tight text-ink">{principle.title}</h3>
							<p data-ev-id="ev_1439e35852" className="mt-3 text-sm leading-7 text-muted-foreground">{principle.body}</p>
						</article>
          )}
				</div>
			</Section>

			<CtaBand
        title="Which of these sounds like your week?"
        description="Tell us the gap you recognise most. We will map it to a module, the sources it needs and the controls it would evidence — before you commit to anything."
        secondary={{ label: 'Explore solutions', to: '/solutions' }} />
      
		</>);

}