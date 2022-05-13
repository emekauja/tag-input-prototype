import IconFilledCancel from '@/assets/icon/IconFilledCancel';
import { Option } from '@/components/controls/dropdownpopper/options';

interface ITagProps {
  tag: Option;
  onCancel: (tag: Option) => void;
}
export const Tag = ({ tag, onCancel }: ITagProps) => {
  return (
    <div className="inline-flex items-center space-x-2 rounded bg-gray-500 px-2">
      <span className="text-white">{tag.label}</span>
      <IconFilledCancel
        width={16}
        height={16}
        className="text-white"
        onClick={() => onCancel(tag)}
      />
    </div>
  );
};
