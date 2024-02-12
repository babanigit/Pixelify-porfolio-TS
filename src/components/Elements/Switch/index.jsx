import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.css';

const Switch = ({
  variant,
  utilities,
  className = '',
  trackWidth = 40,
  trackHeight = 25,
  trackColor = '#ccc',
  thumbWidth = 20,
  thumbHeight = 20,
  thumbColor = '#fff',
  checked = '#007bff',
  children,
  style,
  ...rest
}) => {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];

  const [enabled, setEnabled] = useState(false);

  const handleSwitchChange = () => {
    setEnabled(!enabled);
  };

  return (
    <label
      style={{
        '--track-width': `${trackWidth}px`,
        '--track-height': `${trackHeight}px`,
        '--track-color': trackColor,
        '--thumb-width': `${thumbWidth}px`,
        '--thumb-height': `${thumbHeight}px`,
        '--thumb-color': thumbColor,
        '--checked-color': checked,
        '--thumb-left': enabled ? `${trackWidth - thumbWidth - 3}px` : '3px',
        ...style,
      }}
      className={twMerge(
        'flex items-center gap-[10px] w-fit h-fit',
        className,
        buttonClass,
        utilities
      )}
      {...rest}>
      <input
        type="checkbox"
        className={twMerge('hidden', 'switch-input')}
        onChange={handleSwitchChange}
        checked={enabled}
      />
      <span
        className={twMerge(
          'relative rounded-[12px] transition-bg duration-200 after:absolute after:w-full after:h-full after:rounded-[12px] after:opacity-0 after:transition-opacity after:duration-200',
          'switch-slider'
        )}>
        <span
          className={twMerge(
            'absolute rounded-full top-1/2 transform -translate-y-1/2 transition-left duration-200 z-[2] shadow-md',
            'switch-thumb'
          )}>
          {children}
        </span>
      </span>
    </label>
  );
};

export default Switch;
