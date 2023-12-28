'use client';

import classnames from 'classnames';

import { useState } from 'react';
import Button from '../../blocks/button/button';
export interface IRoutesChildren {
  title: string;
  href: string;
  children?: IRoutesChildren[];
}
export interface IRoutes {
  title: string;
  children?: IRoutesChildren[];
  href: string;
  isOpen?: boolean;
}
export interface IHeader {
  asLink?: boolean;
  theme?: 'light' | 'dark' | 'none';
  color?: string;
  className?: IClassName;
  loading?: boolean;
  loadingLabel?: string;
  arrowDownIcon?: string;
  routes: IRoutes[];
  darkLogo: string;
  lightLogo: string;
  haveLogin: boolean | false;
  onSubmit?: Function;
  iconColor: string;
  focusColor: string;
  unFocusColor: string;
  backgroundColorL: string;
  backgroundColorD: string;
  placeholderColor: string;
  borderHeight?: number;
}
export interface IClassName {
  textClass?: string;
  headerClass?: string;
  buttonClass?: string;
  dialogClass?: string;
  linkClass?: string;
}
const themeClasses = {
  dark: 'bg-black',
  light: 'bg-white',
};
const themeLoadingClasses = {
  dark: 'text-gray-200 dark:text-white fill-white',
  light: 'text-gray-200 dark:text-black fill-purple-600',
};
export default function Header({
  className,
  theme,
  routes,
  darkLogo,
  lightLogo,
  haveLogin,
  arrowDownIcon,
  onSubmit,
  focusColor = '#00DFEB',
  unFocusColor = '',
  backgroundColorL,
  backgroundColorD,
  placeholderColor,
  borderHeight = 1,
}: IHeader) {
  const classes = classnames(theme !== 'none' ? themeClasses[theme || 'light'] : 'light', className?.headerClass || '');
  const loadingClasses = classnames(themeLoadingClasses[theme || 'light']);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isSearchEnable, setIsSearchEnable] = useState(false);
  const [searchText, setSearchText] = useState<string>();

  const routesDefault = routes.map((x) => ({ ...x, isOpen: false }));

  const [routesState, setRoutesState] = useState(routesDefault);

  function returnRoutes(route: IRoutes, index: number) {
    return (
      <div className="relative" key={index}>
        {!!route.children ? (
          <div
            onClick={() => {
              let routesData = routesState;
              if (routesData[index].isOpen == true) {
                routesData[index].isOpen = false;
                setRoutesState([...routesData]);
                return;
              }
              for (let i = 0; i < routesData.length; i++) {
                routesData[i].isOpen = false;
              }
              routesData[index].isOpen = true;
              setRoutesState([...routesData]);
            }}
            className={classnames(
              ` block cursor-pointer text-base font-semibold leading-7 ${
                theme == 'dark' ? 'text-white ' : 'text-gray-900 '
              } `,
              className?.buttonClass,
            )}
            aria-controls="disclosure-1"
            aria-expanded="false"
          >
            <span
              className={classnames(
                `flex text-base leading-7 ${
                  theme == 'dark' ? 'text-white' : 'text-gray-900'
                } items-center justify-between font-normal`,
                className?.linkClass,
              )}
            >
              <div
                className="flex-1 py-3 px-3"
                style={{
                  borderBottom: `${borderHeight}px solid ${focusColor}`,
                  color: unFocusColor,
                }}
              >
                {route.title}
              </div>

              {arrowDownIcon ? (
                <img
                  src={arrowDownIcon}
                  alt=""
                  width={32}
                  height={32}
                  style={{
                    rotate: route.isOpen ? '180deg' : 'none',
                  }}
                  className="mx-3"
                />
              ) : (
                <svg
                  width={32}
                  height={32}
                  className={`mx-3 flex-none text-[${focusColor ?? 'gray-400'}]`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{
                    rotate: route.isOpen ? '180deg' : 'none',
                    color: route.isOpen ? focusColor : unFocusColor ?? 'white',
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </span>
          </div>
        ) : (
          <a
            className={classnames(
              `block cursor-pointer text-base font-normal leading-7 ${
                theme == 'dark' ? 'text-white' : 'text-gray-900'
              }`,
              className?.linkClass,
            )}
            href={route.href}
          >
            <span className="flex">
              <div
                className="flex-1 py-3 px-3"
                style={{
                  borderBottom: `${borderHeight}px solid ${focusColor}`,
                  color: unFocusColor ?? '#000',
                }}
              >
                {route.title}
              </div>
              <div
                className="mx-3"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            </span>
          </a>
        )}

        <div className={`mt-2 space-y-2 ${route.isOpen ? '' : 'hidden'}`} id="disclosure-1">
          {route?.children?.map((y, z) => (
            <a
              key={z}
              href={y.href}
              className={classnames(
                `block cursor-pointer rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 ${
                  theme == 'dark' ? 'text-white' : 'text-gray-900 '
                }`,
                loadingClasses,
                className?.linkClass,
              )}
              style={{
                color: unFocusColor ?? 'white',
              }}
            >
              {y.title}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <header className={classnames(classes)}>
        <nav
          className="mx-auto flex items-center justify-between px-6 py-4"
          aria-label="Global"
          style={{
            maxWidth: '1440px',
          }}
        >
          <div className="flex w-14">
            <button
              type="button"
              onClick={() => {
                setIsOpenMobile(!isOpenMobile);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                stroke={theme == 'dark' ? 'white' : 'currentColor'}
              >
                <path
                  fill={theme == 'dark' ? 'white' : 'currentColor'}
                  d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                ></path>
              </svg>
            </button>
            <div className="ml-2 flex h-6 w-6">
              <button
                type="button"
                className="h-6 w-6"
                onClick={() => {
                  setIsSearchEnable(!isSearchEnable);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="19"
                  height="19"
                  viewBox="0 0 50 50"
                  stroke={theme == 'dark' ? 'white' : 'currentColor'}
                >
                  <path
                    d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                    fill={theme == 'dark' ? 'white' : 'currentColor'}
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:flex-0 flex">
            <a href="/" className="">
              <span className="sr-only">Your Company</span>
              <img className="h-[42px] w-auto" src={theme == 'dark' ? darkLogo : lightLogo} alt="" />
            </a>
          </div>

          <div className="flex h-4 w-14 lg:justify-end">
            {haveLogin ? (
              <a href="#" className={classnames('text-sm font-semibold leading-6', loadingClasses)}></a>
            ) : (
              <span></span>
            )}
          </div>
        </nav>
      </header>
      <div role="dialog" aria-modal="true" className="relative">
        <div
          className={classnames(
            `absolute  ${
              isOpenMobile ? 'z-10' : '-z-10'
            }  overflow-y-auto duration-300 ease-in-out sm:w-1/3 sm:ring-1 sm:ring-gray-900/10 md:w-1/3 lg:w-1/4 sm-mw:w-10/12`,
            className?.dialogClass,
          )}
          style={{
            maxHeight: 'calc(100vh - 200px)',
            top: isOpenMobile == true ? '0' : '-100vh',
            backgroundColor: theme == 'dark' ? backgroundColorD ?? '#000000E5' : backgroundColorL ?? 'bg-white',
          }}
        >
          {/* <div className="flex items-center justify-between">
            <button
              type="button"
              className={classnames(
                `-m-2.5 rounded-md p-2.5 ${theme == 'dark' ? 'text-white' : 'text-gray-700'}`,
                className?.buttonClass,
              )}
              onClick={() => {
                setIsOpenMobile(false);
              }}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> */}
          <div className="flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-2 ">{routesState.map((x, y) => returnRoutes(x, y))}</div>
              {haveLogin && (
                <div className="py-6">
                  <Button
                    link="#"
                    className={classnames(
                      '-mx-3 block cursor-pointer rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900',
                      className?.linkClass,
                    )}
                  >
                    Log in
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div role="dialog" aria-modal="true" className="relative">
        <div
          className={classnames(
            `absolute  ${
              isSearchEnable ? 'z-10' : '-z-10'
            }  w-full overflow-y-auto duration-300 ease-in-out sm:w-1/3 sm:ring-1 sm:ring-gray-900/10 md:w-1/3 lg:w-1/4 sm-mw:!w-full`,
            className?.dialogClass,
          )}
          style={{
            width: 'max-content',
            height: '60px',
            top: isSearchEnable == true ? '2px' : '-100vh',
            backgroundColor: theme == 'dark' ? backgroundColorD ?? '#000000E5' : backgroundColorL ?? 'bg-white',
            left: 0,
          }}
        >
          <form
            className={`relative h-full w-full transition-all md:max-w-xs `}
            onSubmit={(e) => {
              e.preventDefault();
              let searched = searchText;
              setIsSearchEnable(false);
              setSearchText('');
              if (searchText != null) return onSubmit(searched);
            }}
          >
            <input
              className={classnames('h-full w-full px-4', `placeholder:text-primary`)}
              type="text"
              name="search"
              placeholder="Buscar"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              style={{
                backgroundColor: theme == 'dark' ? backgroundColorD : backgroundColorL,
                color: placeholderColor,
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
