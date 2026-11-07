import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';
import { NAV } from '@/lib/site';

export default function NotFound() {

  return (
    <>
			<PageHero
        
        title="That page is not in the record."
        description="The address you requested does not exist, or it has moved. Everything else is one click away."
        actions={
        <ButtonLink to="/" size="lg" variant="inverse">
						Back to home
						<ArrowRight />
					</ButtonLink>
        } />
      

			<Section>
				<SectionHeading title="Main sections of the site." />
				<div data-ev-id="ev_9d3d9484a9" className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{NAV.map((item) =>
          <ButtonLink
            key={item.to}
            to={item.to}
            variant="ghost"
            className="h-auto justify-start rounded-none bg-background p-7 text-base text-ink hover:bg-accent">
            
							{item.label}
							<ArrowRight className="ml-auto" />
						</ButtonLink>
          )}
				</div>
			</Section>
		</>);

}