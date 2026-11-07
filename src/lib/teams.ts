import {
	Briefcase,
	Building2,
	Gavel,
	Landmark,
	Network,
	Scale,
	ServerCog,
	ShieldCheck,
	Wrench,
	type LucideIcon,
} from 'lucide-react';

export type Team = {
	id: string;
	name: string;
	role: string;
	icon: LucideIcon;
	title: string;
	problem: string;
	benefit: string;
	points: string[];
	modules: string[];
	cta: string;
};

export const TEAMS: Team[] = [
	{
		id: 'ceo',
		name: 'CEOs & leadership',
		role: 'Executive',
		icon: Landmark,
		title: 'Make risk a business conversation.',
		problem:
			'Board discussions need clear answers, but security status, service health and audit evidence often arrive as separate reports with different owners.',
		benefit:
			'Bring those conversations back to a shared record. AuditDesk connects security events, privileged activity and operational signals so leadership can ask better questions about exposure, accountability and continuity.',
		points: [
			'Review security and operational priorities together.',
			'Ground oversight conversations in traceable evidence.',
			'Align technology and compliance teams around the same events.',
		],
		modules: ['Log/SIEM', 'APM'],
		cta: 'Discuss executive oversight',
	},
	{
		id: 'td',
		name: 'Technical directors',
		role: 'Architecture',
		icon: Network,
		title: 'Connect the architecture. Reduce the blind spots.',
		problem:
			'Separate security, access and monitoring tools can fragment ownership and make architecture decisions harder to evaluate.',
		benefit:
			'Assess logging, database monitoring, privileged access and observability as a connected suite or individual modules. Establish where evidence comes from, who owns it and how it fits your cloud and on-premise environment.',
		points: [
			'Choose modules around actual architecture needs.',
			'Connect access oversight with service and event context.',
			'Discuss deployment boundaries and evidence ownership.',
		],
		modules: ['Log/SIEM', 'DAM', 'PIM/PAM', 'APM'],
		cta: 'Review your architecture',
	},
	{
		id: 'om',
		name: 'O&M personnel',
		role: 'Operations',
		icon: ServerCog,
		title: 'See the service problem, not just the alert.',
		problem:
			'Repeated notifications and fragmented monitoring can leave operations teams reacting to symptoms while customers continue to experience disruption.',
		benefit:
			'Use latency, uptime and system metrics alongside centralised events to focus investigations. Alert filtering helps teams separate repeated signals from issues that need attention and build a clearer operational timeline.',
		points: [
			'Track service latency and availability.',
			'Investigate related events in context.',
			'Prioritise actionable alerts over duplicate noise.',
		],
		modules: ['APM', 'Log/SIEM'],
		cta: 'Review your operations workflow',
	},
	{
		id: 'integration',
		name: 'Integration engineers',
		role: 'Engineering',
		icon: Wrench,
		title: 'Turn isolated systems into usable signals.',
		problem:
			'Different formats, collection methods and system owners make telemetry onboarding a coordination challenge — not simply a connector installation.',
		benefit:
			'Discuss your source inventory and collection paths, including agent and agentless options, Syslog, Kafka, REST and webhooks. Define how events will enter security and operations workflows before agreeing an integration scope.',
		points: [
			'Map sources, formats and collection requirements.',
			'Identify environment-specific connector needs.',
			'Agree event ownership and onboarding priorities.',
		],
		modules: ['Log/SIEM', 'APM'],
		cta: 'Discuss your integration sources',
	},
	{
		id: 'audit',
		name: 'Compliance & audit',
		role: 'Assurance',
		icon: ShieldCheck,
		title: 'Spend less time chasing the evidence.',
		problem:
			'Audit preparation becomes a scramble when control evidence is scattered, access records are incomplete and reviewers must request each export separately.',
		benefit:
			'Use retained activity records, control mappings and scoped read-only evidence access to support reviews. Discuss the ODPC, CBK, PCI-DSS or ISO/IEC 27001 controls relevant to your organisation; software supports evidence gathering, not certification itself.',
		points: [
			'Connect controls to reviewable activity evidence.',
			'Keep auditor access scoped and read-only.',
			'Define the period and evidence needed for each review.',
		],
		modules: ['Log/SIEM', 'DAM', 'PIM/PAM'],
		cta: 'Plan your next audit review',
	},
	{
		id: 'legal',
		name: 'Legal & privacy',
		role: 'Counsel',
		icon: Scale,
		title: 'Understand the activity behind a data question.',
		problem:
			'A privacy inquiry or suspected exposure demands a reliable account of access — not assumptions built from incomplete application records.',
		benefit:
			'Explore SQL auditing, sensitive-data access alerts and retained activity history to support legal and privacy investigations. Give your legal team a technical record to assess alongside applicable obligations and advice.',
		points: [
			'Review activity involving sensitive records.',
			'Support investigations with access context.',
			'Discuss evidence handling and retention requirements.',
		],
		modules: ['DAM', 'Log/SIEM', 'PIM/PAM'],
		cta: 'Discuss privacy evidence',
	},
	{
		id: 'finance',
		name: 'Finance teams',
		role: 'Commercial',
		icon: Briefcase,
		title: 'Evaluate the investment against a defined need.',
		problem:
			'Security spending is difficult to compare when proposals bundle unrelated capabilities and the cost of evidence preparation remains unclear.',
		benefit:
			'Scope a single module or a connected suite around your operational and review requirements. Give finance and technology teams a common basis for discussing deployment, support and commercial terms without assuming unverified savings.',
		points: [
			'Compare module scope with the full suite.',
			'Include deployment and support needs in the discussion.',
			'Connect the proposal to agreed business priorities.',
		],
		modules: ['Log/SIEM', 'DAM', 'PIM/PAM', 'APM'],
		cta: 'Request a scoped commercial discussion',
	},
	{
		id: 'business',
		name: 'Business operations',
		role: 'Delivery',
		icon: Building2,
		title: 'Connect service health to everyday delivery.',
		problem:
			'Operational teams may know a customer journey is disrupted but lack a common view of the technical events behind it.',
		benefit:
			'Bring service availability, latency and relevant event history into conversations with engineering. Build a more informed picture of which services need attention and what evidence supports incident follow-up.',
		points: [
			'Review the services your workflows depend on.',
			'Discuss availability with engineering using shared signals.',
			'Use event history to support incident follow-up.',
		],
		modules: ['APM', 'Log/SIEM'],
		cta: 'Map your critical services',
	},
	{
		id: 'security',
		name: 'Security & IT',
		role: 'Defence',
		icon: Gavel,
		title: 'Follow the incident across systems and access.',
		problem:
			'Scattered logs, unusual database reads and unexplained administrator sessions make investigations slow and accountability uncertain.',
		benefit:
			'Combine event correlation, database activity monitoring and time-bound privileged access. Investigate the sequence of events with session and access context rather than treating each alert as an isolated incident.',
		points: [
			'Centralise event investigation and triage.',
			'Review sensitive queries and privileged sessions.',
			'Retain evidence for incident and control reviews.',
		],
		modules: ['Log/SIEM', 'DAM', 'PIM/PAM'],
		cta: 'Discuss your security priorities',
	},
];
