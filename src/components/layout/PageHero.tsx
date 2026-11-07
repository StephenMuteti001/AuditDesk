import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Section';
import { cn } from '@/lib/cn';

/** Dark banner used at the top of every inner page so the fixed navbar always rests on navy. */
export function PageHero({
  title,
  description,
  breadcrumbs = [],
  actions,
  aside







}: {title: ReactNode;description: ReactNode;breadcrumbs?: {label: string;to: string;}[];actions?: ReactNode;aside?: ReactNode;}) {
  return (
    <section data-ev-id="ev_027ce38276" className="relative isolate overflow-hidden border-b border-white/10 bg-primary-deep">
			<Container className={cn('relative pb-16 pt-30 sm:pb-20 sm:pt-34 lg:pb-24 lg:pt-38')}>
				{breadcrumbs.length ?
        <nav data-ev-id="ev_8b06365775" aria-label="Breadcrumb" className="mb-7">
						<ol data-ev-id="ev_4b06c216c1" className="flex flex-wrap items-center gap-1 text-xs text-white/50">
							{breadcrumbs.map((crumb, i) =>
            <li data-ev-id="ev_362e87d85e" key={crumb.to} className="flex items-center gap-1">
									{i > 0 ? <ChevronRight className="h-3 w-3" aria-hidden="true" /> : null}
									<Link data-ev-id="ev_b5674f82e6" to={crumb.to} className="hover:text-white">
										{crumb.label}
									</Link>
								</li>
            )}
						</ol>
					</nav> :
        null}

				<div data-ev-id="ev_6ec2d14cab" className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
					<div data-ev-id="ev_5be6b164c9">
						<h1 data-ev-id="ev_e151f95803" className="max-w-3xl text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.032em] text-white sm:text-5xl lg:text-[3.5rem]">
							{title}
						</h1>
						<div data-ev-id="ev_eade9c442d" className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-[1.0625rem] sm:leading-8">
							{description}
						</div>
						{actions ? <div data-ev-id="ev_c1bdc03ba2" className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
					</div>
					{aside ? <div data-ev-id="ev_dbcbc468b2" className="min-w-0">{aside}</div> : null}
				</div>
			</Container>
		</section>);

}