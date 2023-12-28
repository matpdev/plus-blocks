'use client';

import classNames from 'classnames';
import { Fragment } from 'react';

export interface BreadcrumbsItem {
  name: string;
  uri: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbsItem[];
  firstIsHome?: boolean;
  className?: string;
  color?: 'white' | 'blue';
}

export default function Breadcrumbs({ items, firstIsHome = false, color = 'blue', className }: BreadcrumbsProps) {
  if (!items || !items.length) return <Fragment />;
  const styles = classNames('text-xs md:text-sm lg:text-lg', className);
  const stylesItemLink = classNames(
    'relative inline-block pt-0 pb-2 pl-[20px] md:pl-[26px] lg:pl-[32px] hover:no-underline hover:text-secondary',
    "after:content-['>'] after:absolute after:top-[2px] md:after:top-[1px] lg:after:top-[5px] after:left-[5px] after:w-2.5 after:h-2.5",
    'after:font-bold after:leading-none',
    'after:flex after:items-center after:justify-center',
    'md:after:-left-0 md:after:w-8 md:after:h-4',
  );
  return (
    <div className={styles}>
      <nav className="flex flex-wrap font-normal">
        {items.map((item, index) => {
          const styleLink = classNames(stylesItemLink, {
            'font-bold': item.isCurrent,
            'font-medium': !item.isCurrent,
            'text-white after:text-white': color === 'white',
            'text-[#ccc] after:text-[#ccc]': color === 'blue' && !item.isCurrent,
            'text-primary after:text-primary': color === 'blue' && item.isCurrent,
          });
          return (
            <li key={item.uri} className="m-0 list-none p-0">
              <a href={item.uri} {...(firstIsHome ? { rel: 'home' } : {})} className={styleLink}>
                {item.name}
              </a>
            </li>
          );
        })}
      </nav>
    </div>
  );
}
