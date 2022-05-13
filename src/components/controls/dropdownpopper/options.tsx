import React, { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface Option {
  value: string;
  label: string;
}
export interface IDropdownOptionsProps {
  options: Option[];
  renderOption: (option: Option, index: number) => ReactNode;
}

const optClass = classNames('flex', 'flex-col', 'text-left');

export const DropdownOptions = ({
  options,
  renderOption,
}: IDropdownOptionsProps) => {
  const baseClass = classNames(optClass);
  return (
    <div className={baseClass}>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          {renderOption(option, index)}
        </React.Fragment>
      ))}
    </div>
  );
};

// Dropdown Container
interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
export const DropdownContainer = ({ children }: DropdownContainerProps) => {
  return (
    <div className="flex max-h-40 flex-col overflow-auto rounded border border-gray-200  bg-white text-left shadow-xl">
      {children}
    </div>
  );
};

interface IOptionProps {
  option: Option;
  isSelected?: boolean;
  onSelect: (option: Option) => void;
}

export const DefaultOption = ({ option, onSelect }: IOptionProps) => {
  return (
    <span
      key={option.value}
      onClick={() => onSelect(option)}
      className={`text-sm text-black hover:bg-red hover:text-white py-1 px-4 cursor-default`}
    >
      {option.label}
    </span>
  );
};

export const TagInputOption = ({
  option,
  onSelect,
  isSelected,
}: IOptionProps) => {
  const isSelectedClass = classNames('opacity-20', 'pointer-events-none');
  const optionClass = classNames(
    'text-sm',
    'text-black',
    'hover:bg-gray-500',
    'hover:text-white',
    'py-1',
    'px-4',
    'cursor-default',
    {
      [isSelectedClass]: isSelected,
    }
  );
  return (
    <span
      key={option.value}
      onClick={() => onSelect(option)}
      className={optionClass}
    >
      {option.label}
    </span>
  );
};
