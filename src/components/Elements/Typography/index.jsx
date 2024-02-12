import React from 'react';
import { twMerge } from 'tailwind-merge';

const variantTypeMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  subtitle: 'span',
  body1: 'p',
  heading: 'h2',
  subHeading: 'h3',
};

export default function Typography({
  variantType = 'span',
  component,
  variant,
  utilities,
  className = '',
  children,
  ...rest
}) {
  const variants = {
    regular: 'lg:text-[#ffffffff]',
    custumtypo: 'lg:text-[17px] lg:text-[#121212ff]',
    customheading: 'lg:text-[22px] lg:text-[#121212ff]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const Component =
    component || variantTypeMapping[variantType || 'body1'] || 'span';

  return (
    <Component
      className={twMerge('m-0', buttonClass, utilities, className)}
      {...rest}>
      {children}
    </Component>
  );
}
