'use client';

import classnames from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';
import SpinnerIcon from '../../components/icons/Spinner';
export interface IButton {
  asLink?: boolean;
  label?: ReactNode;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'u-md';
  theme?: 'pretty' | 'primary' | 'secondary' | 'accent' | 'link' | 'remove' | 'confirm' | 'none';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
  target?: string;
  rel?: string;
  colors?: string;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  uppercase?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  props?: React.DOMAttributes<HTMLDivElement>;
  dangerously?: string;
}
const sizeClasses = {
  xs: 'px-2.5 py-1.5 text-xs rounded',
  sm: 'px-3 py-2 text-sm leading-4 rounded-md',
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-4 py-2 text-base rounded-md',
  xl: 'px-6 py-3 text-base rounded-md',
  'u-md': 'px-4 py-2 text-xs rounded-md',
};
const themeClasses = {
  pretty:
    'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 via-rose-600 to-purple-700 transition ease-in-out duration-300 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600',
  primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white',
  secondary: 'bg-white hover:bg-slate-100 focus:ring-indigo-500 border border-slate-300 text-gray-600',
  accent: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 text-white',
  remove: 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 text-white',
  confirm: 'bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 text-white',
  link: 'bg-transparent shadow-none text-indigo-500 focus:bg-slate-200 focus:ring-0 focus:ring-offset-0',
  none: 'bg-transparent shadow-none text-gray-700 focus:ring-0 focus:ring-offset-0',
};
const themeLoadingClasses = {
  pretty: 'text-gray-200 dark:text-white fill-white',
  primary: 'text-gray-200 dark:text-white fill-white',
  secondary: 'text-gray-200 dark:text-white fill-purple-600',
  accent: 'text-gray-200 dark:text-white fill-purple-600',
  remove: 'text-gray-200 dark:text-white fill-white',
  confirm: 'text-gray-200 dark:text-white fill-white',
  link: 'text-gray-200 dark:text-white fill-purple-600',
  none: 'text-gray-200 fill-gray-700',
};
export default function Button({
  children,
  asLink,
  type,
  size,
  label,
  onClick,
  link,
  target,
  rel,
  className,
  colors,
  theme,
  disabled,
  block,
  uppercase,
  loading,
  loadingLabel,
  dangerously,
}: IButton) {
  if (loading) {
    label = loadingLabel || 'Carregando...';
    disabled = true;
  }
  const classes = classnames(
    {
      'inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2':
        theme !== 'none',
      'w-full flex justify-center': block,
      'uppercase font-bold': uppercase,
      'pointer-events-none': disabled,
      'contrast-50': disabled,
    },
    theme !== 'none' ? sizeClasses[size || 'md'] : '',
    theme !== 'none' ? colors || themeClasses[theme || 'secondary'] : '',
    className,
  );
  const loadingClasses = classnames('w-4 h-4 animate-spin', themeLoadingClasses[theme || 'secondary']);
  const buttonChildren = children || (
    <>
      <span>{label}</span>
      {loading && <SpinnerIcon className={loadingClasses} />}
    </>
  );
  return asLink ? (
    <a href={link} className={classes} target={target} rel={rel} dangerouslySetInnerHTML={{ __html: dangerously }}>
      {buttonChildren}
    </a>
  ) : (
    <button
      type={type || 'button'}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      dangerouslySetInnerHTML={{ __html: dangerously || '' }}
    >
      {dangerously ? null : buttonChildren}
    </button>
  );
}
