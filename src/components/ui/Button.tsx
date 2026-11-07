import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { buttonClass, type ButtonSize, type ButtonVariant } from '@/lib/button-class';

export type { ButtonSize, ButtonVariant };

type BaseProps = {variant?: ButtonVariant;size?: ButtonSize;children: ReactNode;className?: string;};

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button data-ev-id="ev_1d0d774703" className={buttonClass(variant, size, className)} {...rest}>
			{children}
		</button>);

}

export function ButtonLink({ variant, size, className, children, to }: BaseProps & {to: string;}) {
  return (
    <Link data-ev-id="ev_c54a422f0e" to={to} className={buttonClass(variant, size, className)}>
			{children}
		</Link>);

}

export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a data-ev-id="ev_0e970543cb" className={buttonClass(variant, size, className)} {...rest}>
			{children}
		</a>);

}