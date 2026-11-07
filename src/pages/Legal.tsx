import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Section } from '@/components/ui/Section';
import { SITE } from '@/lib/site';

type LegalKind = 'privacy' | 'terms' | 'security';

const CONTENT: Record<
  LegalKind,
  {eyebrow: string;path: string;title: string;intro: string;sections: {heading: string;body: string[];}[];}> =
{
  privacy: {
    eyebrow: 'Privacy policy',
    path: '/privacy',
    title: 'How we handle your information.',
    intro:
    'This policy explains what AuditDesk collects through this website and how we use it. It does not describe the data processed inside a customer deployment — that is governed by your service agreement and data processing addendum.',
    sections: [
    {
      heading: 'What we collect',
      body: [
      'Information you submit through our contact form: your name, work email, organisation, role and the message you write.',
      'Basic technical information your browser sends, such as page requests and approximate region, used to keep the site available and secure.']

    },
    {
      heading: 'How we use it',
      body: [
      'To respond to your enquiry and arrange any follow-up conversation you request.',
      'To maintain a record of commercial discussions where you have asked us to prepare a scope or proposal.',
      'We do not sell your information and we do not share it with third parties for marketing.']

    },
    {
      heading: 'Your rights',
      body: [
      'Under the Kenyan Data Protection Act 2019 you may request access to, correction of, or deletion of the personal data we hold about you.',
      `Write to ${SITE.email} and we will respond within the statutory period.`]

    },
    {
      heading: 'Retention',
      body: [
      'Enquiry records are kept only as long as needed for the commercial conversation and any resulting contract, after which they are deleted.']

    }]

  },
  terms: {
    eyebrow: 'Terms of service',
    path: '/terms',
    title: 'Terms for using this website.',
    intro:
    'These terms govern your use of the AuditDesk website. Use of the AuditDesk platform itself is governed by the separate agreement signed with your organisation.',
    sections: [
    {
      heading: 'Information on this site',
      body: [
      'Product descriptions are provided for general information. Specific capabilities, service levels and commitments are set out in your contract, not on this site.',
      'Nothing here constitutes legal, regulatory or compliance advice. AuditDesk supports evidence gathering; certification and regulatory interpretation remain the responsibility of your organisation and its advisers.']

    },
    {
      heading: 'Acceptable use',
      body: [
      'Do not attempt to disrupt this website, probe it for vulnerabilities outside our disclosure process, or use it to transmit unlawful content.']

    },
    {
      heading: 'Intellectual property',
      body: [
      'The AuditDesk name, logo, written content and visual design on this site belong to AuditDesk and may not be reproduced without written permission.']

    },
    {
      heading: 'Governing law',
      body: ['These terms are governed by the laws of Kenya.']
    }]

  },
  security: {
    eyebrow: 'Security disclosures',
    path: '/security',
    title: 'Reporting a vulnerability.',
    intro:
    'We welcome reports from security researchers. If you believe you have found a vulnerability in the AuditDesk website or platform, tell us before telling anyone else and we will work with you.',
    sections: [
    {
      heading: 'How to report',
      body: [
      `Email ${SITE.email} with the subject line “Security disclosure”. Include the affected endpoint, the steps to reproduce and any supporting output.`,
      'We acknowledge reports within two business days and provide a remediation status within ten.']

    },
    {
      heading: 'What we ask',
      body: [
      'Do not access, modify or exfiltrate data belonging to another party.',
      'Do not run denial-of-service tests or automated scans that degrade service for others.',
      'Give us reasonable time to remediate before any public disclosure.']

    },
    {
      heading: 'Our commitments',
      body: [
      'We will not pursue legal action against researchers who follow this process in good faith.',
      'With your permission we will credit you once the issue is resolved.']

    }]

  }
};

export default function Legal({ kind }: {kind: LegalKind;}) {
  const page = CONTENT[kind];


  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: page.eyebrow, to: page.path }]
        }
        title={page.title}
        description={page.intro} />
      

			<Section>
				<div data-ev-id="ev_b321390936" className="flex max-w-3xl flex-col gap-10">
					{page.sections.map((section, i) =>
          <article data-ev-id="ev_f7f4786a81" key={section.heading} className="border-b border-border pb-10 last:border-b-0 last:pb-0">
							<span data-ev-id="ev_944e0ff3fc" className="font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
							<h2 data-ev-id="ev_4dbf572402" className="mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">{section.heading}</h2>
							<div data-ev-id="ev_c6c3d2c5ab" className="mt-4 flex flex-col gap-4">
								{section.body.map((paragraph) =>
              <p data-ev-id="ev_ad32d8884f" key={paragraph} className="text-base leading-8 text-muted-foreground">
										{paragraph}
									</p>
              )}
							</div>
						</article>
          )}
				</div>
			</Section>

			<CtaBand
        title="Questions about any of this?"
        description="Our team answers privacy, contractual and security disclosure questions directly — no ticket queue."
        primaryLabel="Contact us" />
      
		</>);

}