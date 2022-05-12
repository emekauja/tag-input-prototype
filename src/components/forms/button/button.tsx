import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import classNames from 'classnames';

const baseClass = classNames('px-3.5', 'py-2', 'rounded-md', 'text-sm');

// solid Scheme
const solidBtnScheme = classNames(
  'bg-white',
  'text-black',
  // 'shadow-sm',
  'border',
  'hover:bg-black',
  'hover:border-white',
  'hover:text-white',
  'focus:bg-black',
  'focus:border-white',
  'focus:text-white'
);

// Spacing
const spacing = classNames('space-x-2');
// disabled Status
const disabledBtn = classNames('opacity-25', 'cursor-not-allowed');

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'outline';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  isFullWidth?: boolean;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { variant = 'solid', leftIcon, rightIcon, disabled, children, ...props },
    ref
  ) => {
    const buttonClass = classNames(baseClass, spacing, {
      [solidBtnScheme]: variant === 'solid',
      [disabledBtn]: disabled,
    });
    return (
      <button
        type="button"
        ref={ref}
        {...props}
        disabled={disabled}
        className={buttonClass}
      >
        {!!leftIcon && leftIcon}
        <span>{children}</span>
        {!!rightIcon && rightIcon}{' '}
      </button>
    );
  }
);
