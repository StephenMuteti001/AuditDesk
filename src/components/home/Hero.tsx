import { ArrowRight, ChevronDown } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';
import heroPlate from '@/assets/generated/hero-operations.webp';
import heroVideo from '@/assets/auditdesk-operations.mp4.asset.json';

const TICKER = [
'auth.failed  user=svc_core  src=10.4.2.18',
'ALERT  brute-force pattern  sev=HIGH  case #4120',
'SELECT * FROM customers  rows=184,203  policy=bulk-pii',
'PAM  request prod-db-01  role=dba  ttl=30m',
'APPROVED  by j.mwangi  via MFA',
'payments-api  p95 182ms  ▲ 12%',
'mpesa-gateway  uptime 99.98%',
'EVIDENCE  142 controls mapped  ODPC · CBK · PCI-DSS',
'session #4821 recorded  retention 7y  sha-256 chained'];


const STATS = [
{ value: '500+', label: 'Log source parsers' },
{ value: '4', label: 'Connected modules' },
{ value: '7 yr', label: 'Tamper-evident retention' },
{ value: '100%', label: 'In-country residency option' }];


/**
 * Full-bleed hero. The backdrop starts at the very top of the document so the
 * fixed, transparent navbar sits directly on the footage — the ByteDance treatment.
 */
export function Hero() {
  return (
    <section data-ev-id="ev_c3c58428dc" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-primary-deeper">
			{/* Layer 1 — generated operations footage with slow drift; still plate as poster/fallback */}
			<video data-ev-id="ev_b115a67a4a"
      className="ad-hero-plate absolute inset-0 -z-30 h-full w-full object-cover object-[64%_center]"
      src={heroVideo.url}
      poster={heroPlate}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true" />

			{/* Layer 3 — navy scrims */}
			<div data-ev-id="ev_5e3c2021c0" aria-hidden="true" className="ad-hero-scrim absolute inset-0 -z-10" />
			<div data-ev-id="ev_f07f931242" aria-hidden="true" className="ad-hero-scrim-side absolute inset-0 -z-10 hidden lg:block" />

			<Container className="flex flex-1 flex-col justify-center pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
				<div data-ev-id="ev_63ba53e5ba" className="max-w-4xl">
					<h1 data-ev-id="ev_6a5f0fdf7c"
          className="ad-rise text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.75rem]"
          style={{ animationDelay: '80ms' }}>
            
						See every signal.
						<br data-ev-id="ev_a36a5d6327" />
						<span data-ev-id="ev_d3123f44fc" className="text-white/55">Prove every action.</span>
					</h1>

					<p data-ev-id="ev_5d2cc300bc"
          className="ad-rise mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
          style={{ animationDelay: '160ms' }}>
            
						Automated SIEM, log management, database activity monitoring and privileged access security — built so
						your teams can investigate faster and evidence ODPC and CBK obligations without a scramble.
					</p>

					<div data-ev-id="ev_921b11b1b9" className="ad-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
						<ButtonLink to="/contact" size="lg" variant="inverse">
							Contact Sales
							<ArrowRight />
						</ButtonLink>
						<ButtonLink to="/solutions" size="lg" variant="outlineInverse">
							Explore Solutions
						</ButtonLink>
					</div>
				</div>

				<dl data-ev-id="ev_10ae59a6fb" className="ad-rise mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border border-white/12 bg-white/12 lg:grid-cols-4" style={{ animationDelay: '320ms' }}>
					{STATS.map((stat) =>
          <div data-ev-id="ev_43b31cdae1" key={stat.label} className="bg-primary-deeper/70 px-5 py-4 backdrop-blur-sm">
							<dt data-ev-id="ev_8e26a2dd35" className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-white/50">
								{stat.label}
							</dt>
							<dd data-ev-id="ev_b0e71d0d2b" className="mt-1.5 text-2xl font-bold tracking-tight text-white">{stat.value}</dd>
						</div>
          )}
				</dl>
			</Container>

			{/* Live event ticker pinned to the base of the footage */}
			<div data-ev-id="ev_e06245e30c" className="relative border-t border-white/10 bg-primary-deeper/75 py-2.5 backdrop-blur-sm">
				<div data-ev-id="ev_703d84eda1" className="flex w-max ad-ticker" aria-hidden="true">
					{[0, 1].map((copy) =>
          <div data-ev-id="ev_d7d0b3dfa8" key={copy} className="flex">
							{TICKER.map((line) =>
            <span data-ev-id="ev_19a13c0edd"
            key={`${copy}-${line}`}
            className="flex items-center gap-4 whitespace-nowrap px-6 font-mono text-[0.6875rem] text-white/40">
              
									<span data-ev-id="ev_61da9b0a42" className="h-1 w-1 rounded-full bg-primary" />
									{line}
								</span>
            )}
						</div>
          )}
				</div>
			</div>

			<a data-ev-id="ev_e4502c78a1"
      href="#suite"
      aria-label="Scroll to the enterprise suite"
      className="absolute bottom-16 left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-md border border-white/30 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:flex">
        
				<ChevronDown className="h-5 w-5" />
			</a>
		</section>);

}