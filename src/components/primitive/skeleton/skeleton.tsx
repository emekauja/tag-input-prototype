import classNames from 'classnames';

const skeletonClass = classNames('animate-pulse');
const textClass = classNames('rounded');
const circleClass = classNames('rounded-full');
const rectangleClass = classNames('rounded-none');
interface ISkeleton {
  variant?: 'text' | 'circle' | 'rectangle';
  width?: number | string;
  height?: number | string;
  bgColor?: string;
}
export const Skeleton = ({
  width,
  height,
  variant,
  bgColor = 'bg-gray-200',
}: ISkeleton) => {
  const baseClass = classNames(skeletonClass, bgColor, {
    [textClass]: variant === 'text',
    [circleClass]: variant === 'circle',
    [rectangleClass]: variant === 'rectangle',
  });
  return <div className={baseClass} style={{ width, height }}></div>;
};

Skeleton.defaultProps = {
  variant: 'text',
  width: '100%',
  height: '14px',
};
