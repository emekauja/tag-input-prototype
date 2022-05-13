import React, { useCallback, useState } from 'react';

import { Option } from '@/components/controls/dropdownpopper/options';
import { Tag } from '@/components/forms/taginput/tag';
import { TagSelect } from '@/components/forms/taginput/tagselect';
import { titleOptions } from '@/data/data';

const Index = () => {
  // const router = useRouter();
  const [titles, setTitles] = useState<Option[]>(() => []);
  const [value, setValue] = useState('');

  const onTitleCancel = useCallback((option: Option) => {
    setTitles((prev) => {
      const updatedTitles = prev.filter((opt) => opt.value !== option.value);
      return updatedTitles;
    });
  }, []);

  const onTitleSelect = useCallback((option: Option) => {
    setTitles((prev) => {
      return prev.concat(option);
    });
    setValue('');
  }, []);

  return (
    <div className="space-y-2 p-5">
      <h2>Select or Add applicable titles (3-5 max)</h2>
      <div>
        <TagSelect
          value={value}
          placeholder="Add title"
          onChange={(v) => setValue(v)}
          selected={titles}
          options={titleOptions}
          onTagCancel={onTitleCancel}
          onSelect={onTitleSelect}
          renderTag={(tag, onCancel) => (
            <Tag tag={tag} onCancel={onCancel} key={tag.value} />
          )}
        />
      </div>
    </div>
  );
};

export default Index;
