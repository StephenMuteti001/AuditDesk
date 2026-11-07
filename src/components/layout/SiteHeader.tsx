import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAV } from '@/lib/site';
import { Logo } from '@/components/brand/Logo';
import { ButtonLink } from '@/components/ui/Button';

/**
 * Fixed header that floats directly on top of the hero footage (ByteDance-style)
 * and resolves to a solid, bordered bar once the page scrolls.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Transparent while resting on a dark hero; solid once scrolled or when the sheet is open.
  const solid = scrolled || mobileOpen;

  const openWithDelay = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  const isActive = (to: string) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header data-ev-id="ev_9b3d16cbf4"
    className={cn(
      'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
      solid ? 'border-b border-border bg-background' : 'border-b border-white/10 bg-transparent'
    )}>
      
			<div data-ev-id="ev_7631882238" className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
				<Link data-ev-id="ev_43e8045fd2" to="/" aria-label="AuditDesk home" className="shrink-0">
					<Logo tone={solid ? 'default' : 'inverse'} />
				</Link>

				<nav data-ev-id="ev_321c1d7d82" className="hidden items-center gap-1 lg:flex" aria-label="Main">
					{NAV.map((item) => {
            const active = isActive(item.to);
            const linkTone = solid ?
            active ?
            'text-primary' :
            'text-muted-foreground hover:text-ink' :
            active ?
            'text-white' :
            'text-white/70 hover:text-white';

            if (!item.children) {
              return (
                <Link data-ev-id="ev_65cf849028"
                key={item.to}
                to={item.to}
                className={cn('rounded-md px-3 py-2 text-sm font-medium transition-colors', linkTone)}>
                  
									{item.label}
								</Link>);

            }

            const open = openMenu === item.label;
            return (
              <div data-ev-id="ev_b394f438fe"
              key={item.label}
              className="relative"
              onMouseEnter={() => openWithDelay(item.label)}
              onMouseLeave={closeWithDelay}>
                
								<Link data-ev-id="ev_258d3a627f"
                to={item.to}
                aria-expanded={open}
                className={cn(
                  'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  linkTone
                )}>
                  
									{item.label}
									<ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} />
								</Link>
								{open ?
                <div data-ev-id="ev_3a94bd2d11" className="absolute left-0 top-full w-[21rem] pt-3">
										<div data-ev-id="ev_d2214f736c" className="overflow-hidden rounded-md border border-border bg-popover p-1.5">
											{item.children.map((child) =>
                    <Link data-ev-id="ev_048b3fd4a7"
                    key={child.to + child.label}
                    to={child.to}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-md px-3 py-2.5 transition-colors hover:bg-accent">
                      
													<span data-ev-id="ev_041db86567" className="block text-sm font-semibold text-ink">{child.label}</span>
													<span data-ev-id="ev_6d35e9fb83" className="mt-0.5 block text-xs leading-5 text-muted-foreground">
														{child.description}
													</span>
												</Link>
                    )}
										</div>
									</div> :
                null}
							</div>);

          })}
				</nav>

				<div data-ev-id="ev_2c6b3b5790" className="hidden shrink-0 lg:block">
					<ButtonLink to="/contact" variant={solid ? 'primary' : 'inverse'}>
						Contact Sales
					</ButtonLink>
				</div>

				<button data-ev-id="ev_b757c80b73"
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors lg:hidden',
          solid ? 'border-border text-ink hover:bg-accent' : 'border-white/25 text-white hover:bg-white/10'
        )}>
          
					{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{mobileOpen ?
      <div data-ev-id="ev_a013ebebfb" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
					<nav data-ev-id="ev_3e143f73c8" className="flex flex-col gap-1 px-5 pb-8 pt-4" aria-label="Mobile">
						{NAV.map((item) => {
            if (!item.children) {
              return (
                <Link data-ev-id="ev_f6f6cb11c9"
                key={item.to}
                to={item.to}
                className={cn(
                  'rounded-md px-3 py-3 text-base font-medium',
                  isActive(item.to) ? 'bg-accent text-primary' : 'text-ink hover:bg-accent'
                )}>
                  
										{item.label}
									</Link>);

            }
            const expanded = mobileGroup === item.label;
            return (
              <div data-ev-id="ev_3d75386f74" key={item.label} className="flex flex-col">
									<button data-ev-id="ev_5423e4b988"
                type="button"
                onClick={() => setMobileGroup(expanded ? null : item.label)}
                aria-expanded={expanded}
                className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-accent">
                  
										{item.label}
										<ChevronDown className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')} />
									</button>
									{expanded ?
                <div data-ev-id="ev_606972fc2e" className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
											{item.children.map((child) =>
                  <Link data-ev-id="ev_9aeb53ebc4"
                  key={child.to + child.label}
                  to={child.to}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-ink">
                    
													{child.label}
												</Link>
                  )}
										</div> :
                null}
								</div>);

          })}
						<ButtonLink to="/contact" size="lg" className="mt-4 w-full">
							Contact Sales
						</ButtonLink>
					</nav>
				</div> :
      null}
		</header>);

}