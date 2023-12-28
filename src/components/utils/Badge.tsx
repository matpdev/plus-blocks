'use client';

import classNames from 'classnames';
import { ReactNode } from 'react';
export interface BadgeProps {
  label?: string;
  children?: ReactNode;
  rounded?: boolean;
  size?: 'md' | 'lg';
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
  className?: string;
}
const colorClasses = {
  gray: 'bg-gray-100 text-gray-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
};
export default function Badge({
  label,
  children,
  color = 'gray',
  rounded = false,
  size = 'md',
  className,
}: BadgeProps) {
  const colorClass = colorClasses[color];
  const styles = classNames(
    'inline-flex items-center font-medium',
    colorClass,
    {
      'px-2.5 py-0.5 text-xs': size === 'md',
      'px-3 py-0.5 text-sm': size === 'lg',
      'rounded-full': rounded,
      'rounded-md': !rounded,
    },
    className,
  );
  return <span className={styles}>{label || children}</span>;
}
