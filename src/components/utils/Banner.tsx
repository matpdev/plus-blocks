'use client';

import classNames from 'classnames';
import { ReactNode } from 'react';
import { MegaphoneIcon } from '../icons/Megaphone';
export interface BannerProps {
  theme?: 'pretty' | 'primary' | 'white' | 'accent' | 'error' | 'success' | 'warning';
  position?: 'top' | 'bottom' | 'balloon';
  body: ReactNode;
  actions: ReactNode;
  className?: string;
}
const themeClasses = {
  pretty: 'bg-gradient-to-r from-orange-500 via-rose-600 to-purple-700 text-white',
  primary: 'bg-indigo-600 text-white',
  white: 'bg-white text-indigo-700',
  accent: 'bg-orange-600 text-white',
  error: 'bg-rose-600 text-white',
  success: 'bg-lime-600 text-white',
  warning: 'bg-yellow-600 text-white',
};
export default function Banner({ body, actions, theme = 'primary', position = 'balloon' }: BannerProps) {
  const styles = classNames('fixed inset-x-0 bottom-0 pb-2 sm:pb-5 font-medium z-50 shadow-lg', classNames['']);
  const stylesTheme = classNames('rounded-lg p-2 shadow-lg sm:p-3', themeClasses[theme || 'primary']);
  return (
    <div className={styles}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className={stylesTheme}>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-full flex-1 items-start sm:items-center">
              <span className="flex rounded-lg bg-black/30 p-2">
                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div className="ml-3 font-medium">{body}</div>
            </div>
            {actions && (
              <div className="order-3 mt-2 flex w-full flex-shrink-0 justify-center sm:order-2 sm:mt-0 sm:w-auto">
                {actions}
              </div>
            )}
            {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
