import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function DropdownMenu({
  variant,
  utilities,
  children,
  isOpen,
  className = '',
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return isOpen ? (
    <div
      className={twMerge(
        'flex justify-between p-[5px] top-[30px] rounded-[6px] flex-col z-9 bg-white w-auto absolute',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {children}
    </div>
  ) : null;
}
