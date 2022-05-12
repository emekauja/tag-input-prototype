import React from 'react';

import classNames from 'classnames';

const baseClass = classNames(
  'text-white',
  'list-none',
  'text-base',
  'cursor-pointer'
);
const activeClass = classNames("before:content-['[']", "after:content-[']']");
const inactiveClass = classNames(
  "hover:before:content-['[']",
  "hover:after:content-[']']"
);

interface IPaginationItemProps {
  pageNumber: number;
  selected?: boolean;
  onSelect?: (page: number) => void;
}

export const PaginationItem = ({
  pageNumber,
  selected,
  onSelect,
}: IPaginationItemProps) => {
  const itemClass = classNames(baseClass, {
    [activeClass]: selected,
    [inactiveClass]: !selected,
  });
  return (
    <li
      className={itemClass}
      onClick={() => {
        if (onSelect) onSelect(pageNumber);
      }}
    >
      {pageNumber}
    </li>
  );
};
