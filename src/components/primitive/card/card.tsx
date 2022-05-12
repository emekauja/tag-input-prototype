import React from 'react';

import { Item } from '@/types';

interface ICardProps {
  item: Item;
}

export const Card = ({ item }: ICardProps) => {
  return (
    <div className="cursor-pointer rounded-lg border border-gray-500 bg-gray-900 p-6 shadow-white transition-all duration-200 hover:border-white hover:bg-black hover:shadow">
      <p className="!m-0 text-base font-medium text-white">
        {'name' in item ? item.name : item.title}
      </p>
    </div>
  );
};
