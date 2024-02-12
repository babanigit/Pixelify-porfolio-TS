import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Header({
  variant,
  utilities,
  children,
  className = '',
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <header
      className={twMerge(
        'bg-gray-400 p-[20px]',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {children}
    </header>
  );
}
