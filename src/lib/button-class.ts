import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse' | 'outlineInverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANTS: Record<ButtonVariant, string> = {
	primary: 'bg-primary text-primary-foreground hover:bg-primary-deep border border-primary hover:border-primary-deep',
	secondary: 'bg-secondary text-secondary-foreground border border-transparent hover:bg-accent',
	outline: 'bg-background text-ink border border-border hover:bg-accent hover:border-primary/30',
	ghost: 'bg-transparent text-muted-foreground border border-transparent hover:bg-accent hover:text-ink',
	inverse: 'bg-background text-primary-deep border border-background hover:bg-white/90',
	outlineInverse:
		'bg-transparent text-white border border-white/35 hover:bg-white hover:text-primary-deep hover:border-white',
};

const SIZES: Record<ButtonSize, string> = {
	sm: 'h-9 px-3 text-sm gap-1.5',
	md: 'h-10 px-4 text-sm gap-2',
	lg: 'h-12 px-6 text-base gap-2',
};

/** Shared flat-button class builder used by Button, ButtonLink and ButtonAnchor. */
export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
	return cn(
		'inline-flex shrink-0 items-center justify-center rounded-md font-semibold tracking-tight',
		'transition-colors duration-150 outline-none',
		'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'disabled:pointer-events-none disabled:opacity-55',
		'[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
		VARIANTS[variant],
		SIZES[size],
		className,
	);
}
