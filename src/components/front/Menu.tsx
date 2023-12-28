'use client';

import classnames from 'classnames';

export interface IMenu {
  asLink?: boolean;
  theme?: 'light' | 'dark' | 'none';
  color?: string;
  className?: string;
  loading?: boolean;
  loadingLabel?: string;
  routes: IRoutes[];
}
export interface IRoutes {
  title: string;
  href: string;
}
const themeClasses = {
  dark: 'bg-black',
  light: 'bg-white',
};
const themeLoadingClasses = {
  dark: 'text-gray-200 dark:text-white fill-white hover:bg-slate-800',
  light: 'text-gray-200 dark:text-black fill-purple-600 hover:bg-gray-50',
};

export default function Menu({ asLink, className, color, theme, loading, loadingLabel, routes }: IMenu) {
  const classes = classnames(theme !== 'none' ? themeClasses[theme || 'light'] : 'light', className);
  const loadingClasses = classnames(themeLoadingClasses[theme || 'light']);
  return (
    <div className={classes}>
      <div className="mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8" aria-label="Global">
        {routes?.map((x, y) => (
          <a
            key={y}
            href={x.href}
            className={classnames('-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7', loadingClasses)}
          >
            {x.title}
          </a>
        ))}
      </div>
    </div>
  );
}
