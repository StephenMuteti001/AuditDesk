import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';
import { Container, Pill } from '@/components/ui/Section';
import { SITE } from '@/lib/site';
import { SOLUTIONS } from '@/lib/solutions';

const FIELD =
'h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30';
const LABEL = 'text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground';

const EXPECT = [
'A reply from an engineer, not a queue',
'A short call to map your source inventory',
'A written scope before any commercial discussion'];


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState<string[]>([]);


  function toggle(id: string) {
    setInterest((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
			<PageHero
        
        breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Contact', to: '/contact' }]
        }
        title="Tell us what you cannot currently see."
        description="Describe the investigation that took too long, the access question you could not answer or the audit that consumed a week. We will map it to a scope, the sources it needs and the controls it would evidence."
        aside={
        <ul data-ev-id="ev_ed35a413d7" className="flex flex-col gap-3">
						{EXPECT.map((item) =>
          <li data-ev-id="ev_d92ba1abf4" key={item} className="flex items-start gap-3 text-sm leading-6 text-white/75">
								<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
								{item}
							</li>
          )}
					</ul>
        } />
      

			<section data-ev-id="ev_a44a03bf8a" className="border-b border-border bg-background py-18 sm:py-22 lg:py-28">
				<Container>
					<div data-ev-id="ev_c9725d0072" className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
						<div data-ev-id="ev_2246e854e1" className="min-w-0 rounded-md border border-border bg-surface p-7 sm:p-9">
							{submitted ?
              <div data-ev-id="ev_d8cf3edb5f" className="ad-rise flex flex-col items-start gap-4 py-8">
									<span data-ev-id="ev_7e570b074a" className="flex h-11 w-11 items-center justify-center rounded-md border border-success/30 bg-success/10 text-success">
										<Check className="h-5 w-5" aria-hidden="true" />
									</span>
									<h2 data-ev-id="ev_afff15d855" className="text-2xl font-bold tracking-tight text-ink">Thank you — message received.</h2>
									<p data-ev-id="ev_2b222615d2" className="max-w-md text-sm leading-7 text-muted-foreground">
										An AuditDesk engineer will reply within one business day. If it is urgent, email{' '}
										<a data-ev-id="ev_3645b53451" href={`mailto:${SITE.email}`} className="font-semibold text-primary hover:underline">
											{SITE.email}
										</a>{' '}
										directly.
									</p>
									<Button variant="outline" onClick={() => setSubmitted(false)}>
										Send another message
									</Button>
								</div> :

              <form data-ev-id="ev_4babed3eb6" onSubmit={handleSubmit} className="flex flex-col gap-6">
									<div data-ev-id="ev_a600240e23" className="grid gap-5 sm:grid-cols-2">
										<div data-ev-id="ev_d148f666af" className="flex flex-col gap-2">
											<label data-ev-id="ev_520b146077" className={LABEL} htmlFor="name">
												Full name
											</label>
											<input data-ev-id="ev_87d3c68ca7" id="name" name="name" required className={FIELD} placeholder="Jane Mwangi" />
										</div>
										<div data-ev-id="ev_7ad5ac51c3" className="flex flex-col gap-2">
											<label data-ev-id="ev_c3cff1dd9e" className={LABEL} htmlFor="email">
												Work email
											</label>
											<input data-ev-id="ev_dd586056f8"
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={FIELD}
                    placeholder="jane@yourbank.co.ke" />
                    
										</div>
										<div data-ev-id="ev_be766b927a" className="flex flex-col gap-2">
											<label data-ev-id="ev_3c55ed7b55" className={LABEL} htmlFor="organisation">
												Organisation
											</label>
											<input data-ev-id="ev_cfb76974e9" id="organisation" name="organisation" required className={FIELD} placeholder="Organisation name" />
										</div>
										<div data-ev-id="ev_ece1a15a11" className="flex flex-col gap-2">
											<label data-ev-id="ev_7bd7aa2e7e" className={LABEL} htmlFor="role">
												Your role
											</label>
											<input data-ev-id="ev_41e57f4739" id="role" name="role" className={FIELD} placeholder="Head of Information Security" />
										</div>
									</div>

									<fieldset data-ev-id="ev_6e313c213d" className="flex flex-col gap-3">
										<legend data-ev-id="ev_e5ddde4221" className={LABEL}>What are you evaluating?</legend>
										<div data-ev-id="ev_cc59c937d0" className="flex flex-wrap gap-2">
											{SOLUTIONS.map((solution) => {
                      const active = interest.includes(solution.id);
                      return (
                        <button data-ev-id="ev_c4f441319f"
                        key={solution.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggle(solution.id)}
                        className={
                        'rounded-md border px-3 py-2 text-xs font-semibold transition-colors ' + (
                        active ?
                        'border-primary bg-primary text-primary-foreground' :
                        'border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-ink')
                        }>
                          
														{solution.title}
													</button>);

                    })}
										</div>
									</fieldset>

									<div data-ev-id="ev_64b2e56563" className="flex flex-col gap-2">
										<label data-ev-id="ev_ba6118cdfa" className={LABEL} htmlFor="message">
											What would you like to see?
										</label>
										<textarea data-ev-id="ev_de8e7c338b"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-border bg-background p-3.5 text-sm leading-6 text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="We need to evidence CBK privileged access controls across 40 production hosts…" />
                  
									</div>

									<div data-ev-id="ev_cfe080267f" className="flex flex-wrap items-center gap-4">
										<Button type="submit" size="lg">
											Send message
											<ArrowRight />
										</Button>
										<p data-ev-id="ev_798fc0db7f" className="text-xs leading-5 text-muted-foreground">
											We use your details only to respond to this enquiry.
										</p>
									</div>
								</form>
              }
						</div>

						<aside data-ev-id="ev_be5b28a5bf" className="flex flex-col gap-px overflow-hidden rounded-md border border-border bg-border self-start">
							<a data-ev-id="ev_f231ec84a2" href={`mailto:${SITE.email}`} className="flex items-center gap-4 bg-background p-6 transition-colors hover:bg-accent">
								<Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
								<span data-ev-id="ev_50f160a9ac">
									<span data-ev-id="ev_dc7bf35568" className="block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
										Email
									</span>
									<span data-ev-id="ev_e901814f19" className="text-sm font-semibold text-ink">{SITE.email}</span>
								</span>
							</a>
							<a data-ev-id="ev_c80d3ef2f3" href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-background p-6 transition-colors hover:bg-accent">
								<Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
								<span data-ev-id="ev_0e22285ba0">
									<span data-ev-id="ev_d2cc42f3b5" className="block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
										Phone
									</span>
									<span data-ev-id="ev_752de702e1" className="text-sm font-semibold text-ink">{SITE.phone}</span>
								</span>
							</a>
							<div data-ev-id="ev_a625d68f9f" className="flex items-center gap-4 bg-background p-6">
								<MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
								<span data-ev-id="ev_bd4ac73a11">
									<span data-ev-id="ev_f4ebb4bc27" className="block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
										Office
									</span>
									<span data-ev-id="ev_31eba0118e" className="text-sm font-semibold text-ink">{SITE.address}</span>
								</span>
							</div>
							<div data-ev-id="ev_44ceb27dfa" className="flex flex-wrap gap-2 bg-surface p-6">
								{SITE.areaServed.map((area) =>
                <Pill key={area}>{area}</Pill>
                )}
							</div>
						</aside>
					</div>
				</Container>
			</section>
		</>);

}