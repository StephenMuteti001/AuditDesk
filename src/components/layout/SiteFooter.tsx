import { Link } from '@tanstack/react-router';
import { Clock, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Section';
import { FOOTER_LEGAL, SITE } from '@/lib/site';
import { SOLUTIONS } from '@/lib/solutions';
import { STANDARDS } from '@/lib/compliance';

const COMPANY = [
{ label: 'About AuditDesk', to: '/about' },
{ label: 'Why AuditDesk', to: '/why-auditdesk' },
{ label: 'For Every Team', to: '/teams' },
{ label: 'Contact Sales', to: '/contact' }];


const PLATFORM = [
{ label: 'Platform & Features', to: '/platform' },
{ label: 'Compliance Standards', to: '/compliance' },
{ label: 'All Solutions', to: '/solutions' }];


export function SiteFooter() {
  return (
    <footer data-ev-id="ev_137cd44cf8" className="border-t border-border bg-surface">
			<Container className="py-14 lg:py-16">
				<div data-ev-id="ev_9d9e214b0f" className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
					<div data-ev-id="ev_fe62a02b19" className="lg:col-span-2">
						<Logo />
						<p data-ev-id="ev_918b174eec" className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
							SIEM, log management, database activity monitoring and privileged access security for regulated
							enterprises across Kenya and East Africa.
						</p>
						<ul data-ev-id="ev_aa78dd5105" className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
							<li data-ev-id="ev_ecafdf348f" className="flex items-start gap-3">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<a data-ev-id="ev_f0998f4ee9" href={`mailto:${SITE.email}`} className="hover:text-primary">
									{SITE.email}
								</a>
							</li>
							<li data-ev-id="ev_7c1ac23379" className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<span data-ev-id="ev_d13666403d">{SITE.address}</span>
							</li>
							<li data-ev-id="ev_bdec8f5c15" className="flex items-start gap-3">
								<Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<span data-ev-id="ev_74755cc3e5">Response within one business day</span>
							</li>
						</ul>
					</div>

					<div data-ev-id="ev_17b254ed11">
						<h2 data-ev-id="ev_2a8b6a90cc" className="text-sm font-semibold text-ink">Solutions</h2>
						<ul data-ev-id="ev_05cd42fbea" className="mt-4 flex flex-col gap-3 text-sm">
							{SOLUTIONS.map((s) =>
              <li data-ev-id="ev_7ae6140dc2" key={s.id}>
									<Link data-ev-id="ev_acbfb050d4" to={s.slug} className="text-muted-foreground hover:text-primary">
										{s.title}
									</Link>
								</li>
              )}
						</ul>
					</div>

					<div data-ev-id="ev_d57d13abf9">
						<h2 data-ev-id="ev_386d45d053" className="text-sm font-semibold text-ink">Platform</h2>
						<ul data-ev-id="ev_8be55609f3" className="mt-4 flex flex-col gap-3 text-sm">
							{PLATFORM.map((item) =>
              <li data-ev-id="ev_5d345d19f1" key={item.to}>
									<Link data-ev-id="ev_e405ffc39b" to={item.to} className="text-muted-foreground hover:text-primary">
										{item.label}
									</Link>
								</li>
              )}
						</ul>
					</div>

					<div data-ev-id="ev_8244cbac0b">
						<h2 data-ev-id="ev_e133ae87a1" className="text-sm font-semibold text-ink">Company</h2>
						<ul data-ev-id="ev_68e3f45e7b" className="mt-4 flex flex-col gap-3 text-sm">
							{COMPANY.map((item) =>
              <li data-ev-id="ev_3c84ea3322" key={item.to}>
									<Link data-ev-id="ev_f14a4d3d81" to={item.to} className="text-muted-foreground hover:text-primary">
										{item.label}
									</Link>
								</li>
              )}
						</ul>
					</div>
				</div>

				<div data-ev-id="ev_a4de6322ce" className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
					<span data-ev-id="ev_1b0f30ee9b" className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
						Aligned with
					</span>
					{STANDARDS.map((s) =>
          <Link data-ev-id="ev_c9d0cde3ed"
          key={s.id}
          to="/compliance"
          className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-primary">
            
							{s.abbr}
						</Link>
          )}
				</div>

				<div data-ev-id="ev_2cbd603977" className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p data-ev-id="ev_7fc0b1b565">
						© {new Date().getFullYear()} {SITE.name}. Part of the Desk product family.
					</p>
					<nav data-ev-id="ev_5bc328496e" className="flex flex-wrap gap-5" aria-label="Legal">
						{FOOTER_LEGAL.map((item) =>
            <Link data-ev-id="ev_795b1546e4" key={item.to} to={item.to} className="hover:text-primary">
								{item.label}
							</Link>
            )}
					</nav>
				</div>
			</Container>
		</footer>);

}