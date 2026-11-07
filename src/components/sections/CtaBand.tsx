import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';

export function CtaBand({
  title = 'Ready to see every signal in one place?',
  description = 'Tell us which systems you need to cover. We will map your sources, the controls they evidence and the shortest path to a working deployment.',
  primaryLabel = 'Contact Sales',
  secondary





}: {title?: string;description?: string;primaryLabel?: string;secondary?: {label: string;to: string;};}) {
  return (
    <section data-ev-id="ev_2cad34fda2" className="relative isolate overflow-hidden bg-primary-deep">
			<Container className="relative py-16 sm:py-20 lg:py-24">
				<div data-ev-id="ev_0da4dcd296" className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
					<div data-ev-id="ev_ff85a6d92a">
						<h2 data-ev-id="ev_b3e3a43bb5" className="max-w-2xl text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
							{title}
						</h2>
						<p data-ev-id="ev_4608fffa48" className="mt-5 max-w-2xl text-base leading-7 text-white/70">{description}</p>
					</div>
					<div data-ev-id="ev_70ac42c5ce" className="flex flex-wrap gap-3 lg:justify-end">
						<ButtonLink to="/contact" size="lg" variant="inverse">
							{primaryLabel}
							<ArrowRight />
						</ButtonLink>
						{secondary ?
            <ButtonLink to={secondary.to} size="lg" variant="outlineInverse">
								{secondary.label}
							</ButtonLink> :
            null}
					</div>
				</div>
			</Container>
		</section>);

}