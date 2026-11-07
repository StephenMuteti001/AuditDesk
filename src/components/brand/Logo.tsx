import { cn } from '@/lib/cn';
import logoArch from '@/assets/auditdesk-logo-arch.png';

/**
 * AuditDesk brand lockup.
 * The arch mark is the fused A/D monogram used everywhere a logo appears.
 * `tone="inverse"` renders the mark in pure white for navy / photographic fields.
 */
export function Logo({
  tone = 'default',
  className,
  markClassName,
  wordmark = true





}: {tone?: 'default' | 'inverse';className?: string;markClassName?: string;wordmark?: boolean;}) {
  const inverse = tone === 'inverse';
  return (
    <span data-ev-id="ev_19963a6a99" className={cn('flex items-center gap-2.5', className)}>
			<img data-ev-id="ev_b651c9710b"
      src={logoArch}
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      loading="eager"
      decoding="async"
      className={cn('h-8 w-auto shrink-0 object-contain', inverse && 'brightness-0 invert', markClassName)} />
      
			{wordmark ?
      <span data-ev-id="ev_cab09e4fc9"
      className={cn(
        'text-[1.0625rem] font-extrabold tracking-[-0.03em]',
        inverse ? 'text-white' : 'text-ink'
      )}>
        
					Audit
					<span data-ev-id="ev_1054548927" className={inverse ? 'text-white/60' : 'text-primary'}>Desk</span>
				</span> :
      null}
		</span>);

}