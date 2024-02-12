import { twMerge } from 'tailwind-merge';
import React from 'react';
import './index.css';

export default function Divider({
  variant,
  utilities,
  className = '',
  orientation = 'horizontal',
  dividerWidth = '1px',
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];

  return (
    <>
      <style>
        {`:root{
                                --divider-width: ${dividerWidth};
                            }`}
      </style>
      <hr
        class={twMerge(
          'my-[8px] border-none bg-gray-400',
          'divider',
          buttonClass,
          utilities,
          className
        )}
        divider-orientation={orientation}
        {...rest}
      />
    </>
  );
}
