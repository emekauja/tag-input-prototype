import * as React from 'react';

import { SearchIcon } from '@/assets/icon/SearchIcon';
import { Input } from '@/components/forms/input/input';
import { Menuitem } from '@/components/primitive/menuitem/menuitem';
import { MenuObj, StapiItemKeys } from '@/types';

interface IHeaderWithSearchProps {
  menubar: MenuObj;
  selectedMenuItem: StapiItemKeys;
  onMenuItemSelect: (item: StapiItemKeys) => void;
  onSearchChange: (text: string) => void;
}

export const HeaderWithSearch = ({
  menubar,
  onSearchChange,
  selectedMenuItem,
  onMenuItemSelect,
}: IHeaderWithSearchProps) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold text-white">StarTrek</h1>
      <div className="space-x-3">
        {Object.entries(menubar).map(([_, menuItem], index) => (
          <Menuitem
            key={index}
            text={menuItem.key}
            selected={menuItem.key === selectedMenuItem}
            onSelect={(item) => onMenuItemSelect(item)}
          />
        ))}
      </div>
      <div className="w-1/3 text-gray-400">
        <Input
          leftElement={<SearchIcon />}
          placeholder="Search..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};
