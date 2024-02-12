import React from 'react';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '@mantine/styles';

const useColumnContainerStyles = createStyles(() => ({
  columnContainer: {
    gap: 'var(--gap)',
  },
}));

export default function ColumnContainer({
  children,
  utilities,
  variant,
  className = '',
  style,
  gap,
  ...rest
}) {
  const variants = {
    subtitle: 'lg:items-start lg:gap-y-[15px]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const { classes } = useColumnContainerStyles();

  return (
    <div
      className={twMerge(
        'items-center w-full flex flex-col',
        classes.columnContainer,
        buttonClass,
        utilities,
        className
      )}
      style={{ '--gap': gap, ...style }}
      {...rest}>
      {children}
    </div>
  );
}
