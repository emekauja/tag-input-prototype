import { useCallback, useState } from 'react';

import { DropdownPopper } from '@/components/controls/dropdownpopper/dropdownpopper';
import {
  DropdownContainer,
  DropdownOptions,
  TagInputOption,
} from '@/components/controls/dropdownpopper/options';

import { OnTagCancel, TagInput } from './taginput';

type Option = {
  label: string;
  value: string;
};
interface ITagSelectProps {
  options: Option[];
  selected: Option[];
  value?: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSelect: (option: Option) => void;
  onTagCancel: OnTagCancel<Option>;
  renderTag: (tag: Option, onCancel: OnTagCancel<Option>) => React.ReactNode;
}
export const TagSelect = ({
  value,
  options,
  selected,
  onSelect,
  placeholder,
  renderTag,
  onChange,
  onTagCancel,
}: ITagSelectProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  // const toggleDropdown = useCallback(() => setOpenDropdown((v) => !v), []);
  const handleOptionSelect = (option: Option) => {
    if (onSelect) onSelect(option);
  };
  const isSelected = useCallback(
    (option: Option) => {
      return !!selected.find((f) => f.value === option.value);
    },
    [selected]
  );
  return (
    <DropdownPopper
      automatic={false}
      show={openDropdown}
      setShow={setOpenDropdown}
      useReferenceMinWidth
      reference={
        <TagInput<Option>
          value={value}
          tags={selected}
          placeholder={placeholder}
          onFocus={() => setOpenDropdown(true)}
          onConfirm={(v) => {
            onSelect({ value: v, label: v });
          }}
          onTagCancel={onTagCancel}
          onChange={(val) => onChange(val)}
          renderTag={(tag, onCancel) => renderTag(tag, onCancel)}
        />
      }
      dropdown={
        <DropdownContainer>
          <DropdownOptions
            options={options}
            renderOption={(option, index) => (
              <TagInputOption
                key={index}
                option={option}
                isSelected={isSelected(option)}
                onSelect={handleOptionSelect}
              />
            )}
          />
        </DropdownContainer>
      }
    />
  );
};
