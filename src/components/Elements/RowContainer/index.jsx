import React from 'react';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '@mantine/styles';

const useRowContainerStyles = createStyles(() => ({
  rowContainer: {
    gap: 'var(--gap)',
  },
}));

export default function RowContainer({
  variant,
  utilities,
  children,
  className = '',
  gap,
  style,
  ...rest
}) {
  const variants = {
    box: 'lg:items-center lg:justify-between lg:p-[10px]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const { classes } = useRowContainerStyles();
  return (
    <div
      className={twMerge(
        'flex flex-row',
        classes.rowContainer,
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
