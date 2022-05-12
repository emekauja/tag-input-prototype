import * as React from 'react';

import classNames from 'classnames';

const baseClass = classNames(
  'flex',
  'items-center',
  'border',
  'justify-between',
  'rounded-md',
  'py-2.5',
  'px-4',
  'space-x-2',
  'bg-black'
);

// full width
const fullWidth = classNames('w-full');

// outline variant
const regularClass = classNames(
  'border-gray-500',
  'focus-within:border-gray-400',
  'focus-within:shadow'
);

// bare-bones variant
const bareBonesVariant = classNames(
  'text-sm',
  'text-white',
  'border-none',
  'rounded-none',
  'py-0',
  'px-0',
  'focus:outline-0',
  'focus:ring-0',
  'place-holder:text-gray-900',
  'flex-1',
  'bg-black'
);

export interface IInputProps extends React.ComponentPropsWithRef<'input'> {
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
  isFullWidth?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ rightElement, leftElement, isFullWidth = true, ...props }, ref) => {
    const inputClass = classNames(baseClass, regularClass, {
      [fullWidth]: isFullWidth,
    });

    const inputBareBoneClass = classNames(bareBonesVariant, {
      [fullWidth]: isFullWidth,
    });

    return (
      <div className={inputClass}>
        {!!leftElement && leftElement}
        <input ref={ref} {...props} className={inputBareBoneClass} />
        {!!rightElement && rightElement}
      </div>
    );
  }
);
