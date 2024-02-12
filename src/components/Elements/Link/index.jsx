import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Link({
  variant,
  utilities,
  children,
  className = '',
  href = '#',
  target,
  rel,
  ...rest
}) {
  const variants = {
    'list-link':
      'lg:no-underline lg:flex lg:gap-[8px] lg:items-center lg:text-[#121212ff] lg:text-[15px]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={twMerge(buttonClass, utilities, className)}
      {...rest}>
      {children}
    </a>
  );
}
