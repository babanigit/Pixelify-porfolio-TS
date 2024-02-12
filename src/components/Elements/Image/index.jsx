import { twMerge } from 'tailwind-merge';
import React from 'react';
import { createStyles } from '@mantine/styles';

const useImageStyles = createStyles(() => ({
  image: {
    width: 'var(--root-width)',
    height: 'var(--root-width)',
  },
}));

export default function Image({
  variant,
  utilities,
  src = 'https://picsum.photos/id/184/640/320',
  size,
  h = '190px',
  w = '350px',
  children,
  className = '',
  style,
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];

  const { classes } = useImageStyles();

  if (size) {
    h = size;
    w = size;
  }

  return (
    <img
      src={src}
      alt="Image"
      className={twMerge(
        'rounded-sm',
        classes.image,
        buttonClass,
        utilities,
        className
      )}
      style={{ '--root-width': w, '-root-height': h, ...style }}
    />
  );
}
