import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export function SiteLayout() {
  return (
    <div data-ev-id="ev_9e49913740" className="flex min-h-dvh flex-col bg-background">
			<ScrollToTop />
			<a data-ev-id="ev_6c3ecfff22"
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground">
        
				Skip to content
			</a>
			<SiteHeader />
			<main data-ev-id="ev_144070bdaf" id="main" className="flex-1">
				<Outlet />
			</main>
			<SiteFooter />
		</div>);

}