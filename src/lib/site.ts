export const SITE = {
	name: 'AuditDesk',
	tagline: 'Enterprise SIEM, Log Management & Data Compliance',
	email: 'sales@auditdesk.co.ke',
	phone: '+254 20 000 0000',
	address: 'Westlands, Nairobi, Kenya',
	areaServed: ['Kenya', 'East Africa'],
	url: 'https://auditdesk.co.ke',
} as const;

export const KEYWORDS =
	'SIEM Kenya, Log Management, ODPC Compliance, CBK Cybersecurity Guidelines, Database Activity Monitoring East Africa, Enterprise PIM PAM, Automated Audit Logs, ISO 27001 evidence, PCI-DSS logging';

export type NavChild = { label: string; to: string; description: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV: NavItem[] = [
	{
		label: 'Solutions',
		to: '/solutions',
		children: [
			{ label: 'Log Management & SIEM', to: '/solutions/siem', description: 'Centralised events, correlation and retention' },
			{ label: 'Database Activity Monitoring', to: '/solutions/dam', description: 'SQL auditing and sensitive-data access' },
			{ label: 'Privileged Access (PIM/PAM)', to: '/solutions/pam', description: 'Time-bound access and session recording' },
			{ label: 'Observability & APM', to: '/solutions/apm', description: 'Latency, uptime and alert filtering' },
		],
	},
	{ label: 'Compliance Standards', to: '/compliance' },
	{ label: 'Platform', to: '/platform' },
	{
		label: 'Why AuditDesk',
		to: '/why-auditdesk',
		children: [
			{ label: 'Before & After AuditDesk', to: '/why-auditdesk', description: 'What changes once signals are connected' },
			{ label: 'For Every Team', to: '/teams', description: 'The advantage by role, from board to on-call' },
		],
	},
	{ label: 'About', to: '/about' },
];

export const FOOTER_LEGAL = [
	{ label: 'Privacy Policy', to: '/privacy' },
	{ label: 'Terms of Service', to: '/terms' },
	{ label: 'Security Disclosures', to: '/security' },
];
