import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '@mantine/styles';

const useAvatarStyles = createStyles(() => ({
  avatar: {
    borderRadius: 'var(--root-radius)',
  },
}));

export const Avatar = ({
  src,
  alt = '',
  className = '',
  children,
  variant,
  utilities,
  radius = '50%',
  key,
  id,
  ...rest
}) => {
  const variants = {
    'avatar-bg': 'lg:bg-[#fbbf24] lg:text-[#fb7185]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const { classes } = useAvatarStyles();

  const renderInitials = useMemo(() => {
    const name = children ? String(children) : '';
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }, [children]);

  return (
    <>
      {React.Children.toArray(children).length === 0 && src ? (
        <img
          src={src}
          alt={alt}
          className={twMerge(
            'h-[50px] w-[50px] object-cover shadow-md',
            classes.avatar,
            className,
            utilities,
            buttonClass
          )}
          title="avatar"
          key={key}
          id={id}
          style={{
            '--root-radius': radius,
          }}
          {...rest}
        />
      ) : (
        <div
          className={twMerge(
            'flex justify-center items-center h-[50px] w-[50px] object-cover shadow-md',
            classes.avatar,
            className,
            utilities,
            buttonClass
          )}
          title="avatar"
          key={key}
          id={id}
          style={{
            '--root-radius': radius,
          }}
          {...rest}>
          {renderInitials}
        </div>
      )}
    </>
  );
};
