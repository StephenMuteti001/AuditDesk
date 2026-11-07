import { Activity, Database, KeyRound, ScrollText, type LucideIcon } from 'lucide-react';

export type SolutionId = 'siem' | 'dam' | 'pam' | 'apm';

export type Solution = {
	id: SolutionId;
	slug: string;
	short: string;
	badge: string;
	icon: LucideIcon;
	title: string;
	headline: string;
	value: string;
	audience: string;
	problem: string;
	outcome: string;
	workflow: string;
	cta: string;
	points: string[];
	preview: string[];
	capabilities: { title: string; body: string }[];
	signals: { label: string; value: string }[];
	standards: string[];
};

export const SOLUTIONS: Solution[] = [
	{
		id: 'siem',
		slug: '/solutions/siem',
		short: 'Log/SIEM',
		badge: 'SIEM',
		icon: ScrollText,
		title: 'Log Management & SIEM',
		headline: 'Every event in one investigation workflow.',
		value:
			'Centralised log parsing, continuous incident monitoring, real-time alert triage and historical log retention.',
		audience: 'SOC teams, banks, SACCOs, insurers and telcos',
		problem:
			'When logs live in separate applications, an incident becomes a search across servers, spreadsheets and inboxes. Analysts lose context between the first warning and the systems it affected.',
		outcome:
			'Bring events into one investigation workflow. Correlate related activity, prioritise alerts and retain a traceable history so security teams can explain what happened and auditors can examine the same evidence.',
		workflow:
			'From an unusual sign-in to a connected sequence of events, an assigned investigation and a retained record.',
		cta: 'Discuss your log sources',
		points: [
			'500+ log source parsers across cloud, on-premise and core banking systems',
			'Correlation rules mapped to MITRE ATT&CK techniques',
			'Up to 7-year tamper-evident, hash-chained retention',
			'Case management with assignment, notes and resolution history',
		],
		preview: [
			'03:12:44  auth.failed      user=svc_core  src=10.4.2.18',
			'03:12:45  ALERT  brute-force pattern  sev=HIGH',
			'03:12:46  correlate  4 events  window=90s',
			'03:12:47  triage  → assigned to SOC L1  case #4120',
		],
		capabilities: [
			{
				title: 'Normalised ingestion',
				body: 'Syslog, Kafka, REST, webhooks, Windows Event Log and agent-based collection are parsed into one schema so a query spans every source.',
			},
			{
				title: 'Correlation that reduces noise',
				body: 'Related events are grouped into a single case. Duplicate and low-value signals are suppressed before they reach an analyst queue.',
			},
			{
				title: 'Investigation timeline',
				body: 'Each case carries the ordered sequence of events, the hosts and identities involved and the actions your team took in response.',
			},
			{
				title: 'Retention you can defend',
				body: 'Archives are hash-chained and time-stamped, so a reviewer can confirm that the record has not been altered since collection.',
			},
		],
		signals: [
			{ label: 'Log source parsers', value: '500+' },
			{ label: 'Retention ceiling', value: '7 years' },
			{ label: 'Deployment', value: 'Cloud or on-premise' },
		],
		standards: ['ODPC Data Protection Act 2019', 'CBK Cybersecurity Guidelines', 'PCI-DSS v4.0', 'ISO/IEC 27001'],
	},
	{
		id: 'dam',
		slug: '/solutions/dam',
		short: 'DAM',
		badge: 'DAM',
		icon: Database,
		title: 'Database Activity Monitoring',
		headline: 'Know who read the data, not just who logged in.',
		value: 'Real-time SQL query auditing, unauthorised access detection and data leakage safeguards.',
		audience: 'Data owners, data protection officers and DBAs',
		problem:
			'Application logs alone may not explain who queried sensitive records, what they accessed or whether a large export was expected. Database owners and privacy teams need detail beyond a successful login.',
		outcome:
			'Make database activity visible through SQL auditing and sensitive-data access monitoring. Give DBAs, security and privacy specialists a shared starting point for reviewing unusual reads and investigating possible exposure.',
		workflow: 'From an unexpected data query to a reviewable record of the user, activity and policy context.',
		cta: 'Review database visibility',
		points: [
			'Agentless query capture with no application changes',
			'PII and cardholder column access alerting',
			'Bulk-export thresholds with out-of-hours policies',
			'Per-table and per-column access history for privacy reviews',
		],
		preview: [
			'SELECT * FROM customers        rows=184,203',
			'POLICY  bulk PII read outside window',
			'CONTEXT user=analyst_07  host=10.8.1.44',
			'ACTION  session paused · DPO notified',
		],
		capabilities: [
			{
				title: 'Statement-level auditing',
				body: 'Capture the actual statement, the identity behind it and the rows returned — across Oracle, SQL Server, PostgreSQL, MySQL and MongoDB.',
			},
			{
				title: 'Sensitive data classification',
				body: 'Tag the columns that hold personal, financial or cardholder data so monitoring policies follow the data rather than the table name.',
			},
			{
				title: 'Leakage safeguards',
				body: 'Thresholds on volume, time of day and destination flag exports that fall outside normal patterns before the data leaves the estate.',
			},
			{
				title: 'Privacy-ready evidence',
				body: 'When a data subject or regulator asks who accessed a record, the access history is already assembled and scoped for review.',
			},
		],
		signals: [
			{ label: 'Engines supported', value: '9 major' },
			{ label: 'Capture mode', value: 'Agentless' },
			{ label: 'Alert latency', value: 'Real time' },
		],
		standards: ['ODPC Data Protection Act 2019', 'PCI-DSS v4.0', 'ISO/IEC 27001'],
	},
	{
		id: 'pam',
		slug: '/solutions/pam',
		short: 'PIM/PAM',
		badge: 'PIM / PAM',
		icon: KeyRound,
		title: 'Privileged Access Management',
		headline: 'No standing privileges. No unanswered questions.',
		value:
			'Zero-standing-privileges access control, SSH and database session recording, and multi-factor authorisation for engineering teams.',
		audience: 'Platform, DevOps and security engineering',
		problem:
			'Permanent administrator access and shared credentials make responsibility difficult to establish. A routine production change can leave teams unable to prove who approved access or what happened during a session.',
		outcome:
			'Use time-bound access, approval workflows and recorded privileged sessions to make elevated activity accountable. Engineers get an authorised path to production while security teams keep access decisions and actions traceable.',
		workflow: 'From an access request to approval, a time-limited session and a record available for later review.',
		cta: 'Plan privileged access',
		points: [
			'Just-in-time grants that expire automatically',
			'Full SSH, RDP and database session replay',
			'MFA-backed approval workflows with named approvers',
			'Credential vaulting with automatic rotation',
		],
		preview: [
			'REQUEST   prod-db-01  role=dba  ttl=30m',
			'APPROVED  by j.mwangi  via MFA  13:04:02',
			'RECORDING session #4821 started',
			'EXPIRED   access revoked automatically  13:34:02',
		],
		capabilities: [
			{
				title: 'Zero standing privilege',
				body: 'Engineers hold no permanent production rights. Access is requested, approved and granted for a defined window, then removed without manual cleanup.',
			},
			{
				title: 'Session recording and replay',
				body: 'Privileged SSH, RDP and database sessions are recorded keystroke by keystroke and can be replayed during an incident or control review.',
			},
			{
				title: 'Approval that leaves a trail',
				body: 'Every grant records who asked, who approved, why and for how long — so responsibility is established before the session begins.',
			},
			{
				title: 'Shared credential removal',
				body: 'Vaulted secrets are injected into sessions and rotated after use, so no engineer needs to know a production password.',
			},
		],
		signals: [
			{ label: 'Standing privileges', value: 'Zero' },
			{ label: 'Session capture', value: 'SSH · RDP · DB' },
			{ label: 'Approval', value: 'MFA enforced' },
		],
		standards: ['CBK Cybersecurity Guidelines', 'PCI-DSS v4.0', 'ISO/IEC 27001'],
	},
	{
		id: 'apm',
		slug: '/solutions/apm',
		short: 'APM',
		badge: 'APM',
		icon: Activity,
		title: 'Observability & APM',
		headline: 'See the service problem, not just the alert.',
		value: 'System metrics, service latency tracking, uptime monitoring and proactive alert filtering.',
		audience: 'SRE, O&M and platform operations teams',
		problem:
			'Customers can feel a slow service before a team understands its cause. Disconnected metrics and repetitive alerts make it difficult to distinguish a local symptom from a wider operational problem.',
		outcome:
			'Bring service latency, system metrics and uptime signals into operational monitoring. Help O&M and engineering teams identify affected services, prioritise meaningful alerts and review performance alongside event history.',
		workflow: 'From a service slowdown to a focused investigation of latency, availability and related events.',
		cta: 'Review service monitoring',
		points: [
			'p50 / p95 / p99 latency views per service and endpoint',
			'Synthetic uptime checks from in-country probes',
			'Noise-reduced alert routing with deduplication',
			'Shared service health view for business and engineering',
		],
		preview: [
			'payments-api    p95 182ms   ▲ 12%',
			'mpesa-gateway   uptime 99.98%',
			'core-ledger     p99 1.4s    ▲ threshold',
			'ALERT suppressed  duplicate of #771',
		],
		capabilities: [
			{
				title: 'Service-level latency',
				body: 'Percentile views show whether a slowdown affects every request or a long tail, so teams know whether to scale, roll back or investigate a dependency.',
			},
			{
				title: 'Uptime from where customers are',
				body: 'Synthetic checks run from in-country probes so availability reflects the experience of real users rather than an internal health endpoint.',
			},
			{
				title: 'Alerts worth waking up for',
				body: 'Deduplication, suppression windows and dependency awareness cut repeat notifications so on-call attention goes to genuine incidents.',
			},
			{
				title: 'Shared operational language',
				body: 'Business operations and engineering read the same service health view, which shortens the conversation during a customer-facing disruption.',
			},
		],
		signals: [
			{ label: 'Latency views', value: 'p50 / p95 / p99' },
			{ label: 'Probe locations', value: 'In-country' },
			{ label: 'Alert handling', value: 'Deduplicated' },
		],
		standards: ['CBK Cybersecurity Guidelines', 'ISO/IEC 27001'],
	},
];

export const SOLUTION_BY_ID: Record<SolutionId, Solution> = SOLUTIONS.reduce(
	(acc, s) => ({ ...acc, [s.id]: s }),
	{} as Record<SolutionId, Solution>,
);
