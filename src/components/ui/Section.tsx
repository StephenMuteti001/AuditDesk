import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Container({ children, className }: {children: ReactNode;className?: string;}) {
  return <div data-ev-id="ev_72956071d5" className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = 'default',
  className,
  bordered = true






}: {children: ReactNode;id?: string;tone?: 'default' | 'surface' | 'deep';className?: string;bordered?: boolean;}) {
  const tones = {
    default: 'bg-background text-ink',
    surface: 'bg-surface text-ink',
    deep: 'bg-primary-deep text-white'
  } as const;

  return (
    <section data-ev-id="ev_811dff533c"
    id={id}
    className={cn(
      tones[tone],
      bordered && (tone === 'deep' ? 'border-b border-white/10' : 'border-b border-border'),
      'py-18 sm:py-22 lg:py-28',
      className
    )}>
      
			<Container>{children}</Container>
		</section>);

}

export function SectionHeading({
  title,
  description,
  tone = 'default',
  align = 'left',
  className







}: {title: ReactNode;description?: ReactNode;tone?: 'default' | 'inverse';align?: 'left' | 'center';className?: string;}) {
  return (
    <div data-ev-id="ev_a536c341ac" className={cn('flex flex-col gap-4', align === 'center' && 'mx-auto max-w-3xl text-center items-center', className)}>
			<h2 data-ev-id="ev_422cc37516"
      className={cn(
        'max-w-3xl text-[1.75rem] font-bold leading-[1.12] sm:text-4xl lg:text-[2.75rem]',
        tone === 'inverse' ? 'text-white' : 'text-ink'
      )}>
        
				{title}
			</h2>
			{description ?
      <p data-ev-id="ev_10af5060f9"
      className={cn(
        'max-w-2xl text-base leading-7 sm:text-[1.0625rem] sm:leading-8',
        tone === 'inverse' ? 'text-white/70' : 'text-muted-foreground'
      )}>
        
					{description}
				</p> :
      null}
		</div>);

}

export function Pill({
  children,
  tone = 'default',
  className




}: {children: ReactNode;tone?: 'default' | 'inverse' | 'primary';className?: string;}) {
  const tones = {
    default: 'border-border bg-background text-muted-foreground',
    primary: 'border-primary/25 bg-primary/5 text-primary',
    inverse: 'border-white/20 bg-white/5 text-white/75'
  } as const;
  return (
    <span data-ev-id="ev_741e568802"
    className={cn(
      'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold',
      tones[tone],
      className
    )}>
      
			{children}
		</span>);

}

/** Monospace evidence/console block used across solution pages. */
export function ConsoleBlock({ lines, className }: {lines: readonly string[];className?: string;}) {
  return (
    <div data-ev-id="ev_e855a443e4"
    className={cn(
      'scrollbar-inverse overflow-x-auto rounded-md border border-white/10 bg-primary-deeper p-4 font-mono text-[0.6875rem] leading-6 text-white/75 sm:text-xs',
      className
    )}>
      
			{lines.map((line) =>
      <div data-ev-id="ev_d74b7fa34a" key={line} className="whitespace-pre">
					{line}
				</div>
      )}
		</div>);

}