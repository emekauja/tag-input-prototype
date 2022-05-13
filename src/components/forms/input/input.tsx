import * as React from 'react';

import classNames from 'classnames';

// full width
const fullWidth = classNames('w-full');

// bare-bones variant
const bareBonesVariant = classNames(
  'text-sm',
  'text-black',
  'border-none',
  'rounded-none',
  'py-0',
  'px-0',
  'focus:outline-0',
  'focus:ring-0',
  'place-holder:text-gray-900',
  'flex-1'
  // 'bg-black'
);

export interface IInputProps extends React.ComponentPropsWithRef<'input'> {
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
  isFullWidth?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ isFullWidth = true, ...props }, ref) => {
    const inputBareBoneClass = classNames(bareBonesVariant, {
      [fullWidth]: isFullWidth,
    });

    return <input ref={ref} {...props} className={inputBareBoneClass} />;
  }
);
