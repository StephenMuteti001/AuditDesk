export type Standard = {
	id: string;
	name: string;
	abbr: string;
	authority: string;
	note: string;
	controls: { ref: string; requirement: string; evidence: string }[];
};

export const STANDARDS: Standard[] = [
	{
		id: 'odpc',
		name: 'ODPC Data Protection Act 2019',
		abbr: 'ODPC',
		authority: 'Office of the Data Protection Commissioner, Kenya',
		note: 'Data subject rights, breach notification and records of processing activity.',
		controls: [
			{
				ref: 'S.41',
				requirement: 'Security of personal data',
				evidence: 'Access monitoring on tables holding personal data, with alerting on unexpected reads.',
			},
			{
				ref: 'S.43',
				requirement: 'Breach notification within 72 hours',
				evidence: 'Correlated incident timeline with the affected systems, identities and detection time.',
			},
			{
				ref: 'S.31',
				requirement: 'Records of processing activity',
				evidence: 'Retained query and access history scoped to the systems that process personal data.',
			},
		],
	},
	{
		id: 'cbk',
		name: 'CBK Cybersecurity Guidelines',
		abbr: 'CBK',
		authority: 'Central Bank of Kenya',
		note: 'Prudential guidance for banks, microfinance institutions and payment service providers.',
		controls: [
			{
				ref: 'G.4',
				requirement: 'Continuous monitoring and detection',
				evidence: 'Centralised event collection with correlation rules and a reviewable alert queue.',
			},
			{
				ref: 'G.5',
				requirement: 'Privileged user management',
				evidence: 'Time-bound access grants, named approvals and recorded administrator sessions.',
			},
			{
				ref: 'G.7',
				requirement: 'Incident reporting to the regulator',
				evidence: 'Exportable incident record with detection, containment and resolution timestamps.',
			},
		],
	},
	{
		id: 'pci',
		name: 'PCI-DSS v4.0',
		abbr: 'PCI-DSS',
		authority: 'PCI Security Standards Council',
		note: 'Logging, monitoring and access control for cardholder data environments.',
		controls: [
			{
				ref: 'Req. 10',
				requirement: 'Log and monitor all access to system components',
				evidence: 'Normalised logs with user attribution, retained for at least twelve months.',
			},
			{
				ref: 'Req. 7',
				requirement: 'Restrict access by business need to know',
				evidence: 'Just-in-time privileged grants with approval records and automatic expiry.',
			},
			{
				ref: 'Req. 10.3',
				requirement: 'Protect audit logs from alteration',
				evidence: 'Hash-chained archives with verification that stored records are unchanged.',
			},
		],
	},
	{
		id: 'iso',
		name: 'ISO/IEC 27001',
		abbr: 'ISO 27001',
		authority: 'International Organization for Standardization',
		note: 'Annex A control evidence for information security management system certification.',
		controls: [
			{
				ref: 'A.8.15',
				requirement: 'Logging',
				evidence: 'Event logs produced, retained and regularly reviewed across in-scope systems.',
			},
			{
				ref: 'A.8.2',
				requirement: 'Privileged access rights',
				evidence: 'Allocation, review and revocation of elevated access with a supporting record.',
			},
			{
				ref: 'A.5.25',
				requirement: 'Assessment of information security events',
				evidence: 'Triage decisions and investigation outcomes recorded against each event.',
			},
		],
	},
];

export const PLATFORM_FEATURES = [
	{
		title: 'Continuous telemetry',
		body: 'Agent and agentless collection across cloud, on-premise and core banking systems, normalised into one event schema.',
	},
	{
		title: 'Tamper-evident storage',
		body: 'Hash-chained log archives with verification, so a reviewer can confirm records have not changed since collection.',
	},
	{
		title: 'Local data residency',
		body: 'Deploy inside Kenyan data centres or fully on-premise to keep processing within your jurisdictional boundary.',
	},
	{
		title: 'Role-based evidence access',
		body: 'Give auditors read-only, time-scoped access to the evidence they need without handing over administrative keys.',
	},
	{
		title: 'Alert noise reduction',
		body: 'Deduplication, suppression windows and correlation so analysts work incidents rather than notification floods.',
	},
	{
		title: 'Open integrations',
		body: 'Syslog, Kafka, REST, webhooks and native connectors for major cloud providers and enterprise databases.',
	},
];

export const COMPARISONS: { topic: string; before: string; after: string }[] = [
	{
		topic: 'Investigation',
		before: 'Scattered logs across servers, spreadsheets and inboxes. Each investigation starts by rebuilding context.',
		after: 'Centralised events with correlation and a traceable investigation history that every reviewer can read.',
	},
	{
		topic: 'Data access',
		before: 'Sensitive database activity visible only as a successful login, with no record of what was actually read.',
		after: 'SQL auditing and sensitive-data access monitoring that explains who queried which records, and when.',
	},
	{
		topic: 'Privileged access',
		before: 'Standing administrator rights and shared credentials leave responsibility unclear after a production change.',
		after: 'Time-bound access, named approvals and recorded privileged sessions that establish accountability up front.',
	},
	{
		topic: 'Service health',
		before: 'Alert noise while customers experience a slowdown nobody has yet connected to a specific service.',
		after: 'Latency, uptime and system metrics with focused alert routing so teams act on the real operational issue.',
	},
	{
		topic: 'Audit readiness',
		before: 'Audit week spent requesting records from four teams and reconciling exports that do not agree.',
		after: 'Retained evidence, control mappings and scoped reviewer access available before the audit begins.',
	},
	{
		topic: 'Accountability',
		before: 'Security, operations and compliance reconstruct the same story three times, each from a different source.',
		after: 'One shared record that security, operations, legal and leadership can all reason from together.',
	},
];
