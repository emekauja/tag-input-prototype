import React from 'react';

import classNames from 'classnames';

import { StapiItemKeys } from '@/types';

const baseClass = classNames(
  'inline-block',
  'text-white',
  'list-none',
  'text-base',
  'cursor-pointer',
  'text-sm',
  'capitalize'
);
const activeClass = classNames('text-white');
const inactiveClass = classNames('text-gray-500');

interface IMenuitemProps {
  text: string;
  selected?: boolean;
  onSelect?: (text: StapiItemKeys) => void;
}

export const Menuitem = ({ text, selected, onSelect }: IMenuitemProps) => {
  const itemClass = classNames(baseClass, {
    [activeClass]: selected,
    [inactiveClass]: !selected,
  });
  return (
    <li
      className={itemClass}
      onClick={() => {
        if (onSelect) onSelect(text as StapiItemKeys);
      }}
    >
      {text}
    </li>
  );
};
