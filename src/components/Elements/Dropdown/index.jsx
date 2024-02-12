import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default function Dropdown({
  variant,
  utilities,
  children,
  className = '',
  closeOnClickOutside = true,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => setIsOpen(false);

  useOutsideClick(dropdownRef, closeOnClickOutside ? handleClose : undefined);

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.createElement(child.type, {
      isOpen,
      handleDropdownClick,
      ...child.props,
    });
  });

  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];

  return (
    <div
      ref={dropdownRef}
      className={twMerge(
        'relative w-[300px]',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {childrenWithProps}
    </div>
  );
}
