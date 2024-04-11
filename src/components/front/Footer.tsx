'use client';

import classnames from 'classnames';
import { classNames } from '../../helpers/utils';

export interface IFooterProps {
  routes?: IRoutesFProps[];
  companyName: string;
  theme?: 'none' | 'dark' | 'light';
  type?: 'double' | 'unique';
  ballColors?: string;
  classNames?: string;
  company?: string;
  mailToHref?: string;
  fontClassNames?: string;
  fontHeaderClassNames?: string;
  socialMediaClassName?: string;
  darkLogo: string;
  lightLogo: string;
  subDescription?: string;
  iconSize?: string;
  socialMedia?: {
    facebook?: {
      url: string;
    };
    instagram?: {
      url: string;
    };
    twitter?: {
      url: string;
    };
    linkedin?: {
      url: string;
    };
    youtube?: {
      url: string;
    };
    pinterest?: {
      url: string;
    };
    threads?: {
      url: string;
    };
  };
  links?: {
    terms?: string;
    politics?: string;
    about?: string;
    partners?: string;
  };
  texts?: {
    contact?: string;
    politics?: string;
    about?: string;
    partners?: string;
  };
  dpoName: string;
  dpoDesc?: string;
}
export interface IRoutesFProps {
  title: string;
  children: IChildrenProps[];
}
export interface IChildrenProps {
  name: string;
  href: string;
}
const themeLoadingClasses = {
  dark: 'text-gray-200 dark:text-white fill-white',
  light: 'text-gray-200 dark:text-black fill-purple-600',
};
export default function Footer({
  routes,
  companyName,
  theme,
  classNames,
  socialMedia,
  subDescription,
  darkLogo,
  lightLogo,
  type = 'double',
  links,
  dpoName,
  ballColors,
  fontClassNames,
  socialMediaClassName,
  fontHeaderClassNames,
  company,
  mailToHref,
  dpoDesc,
  iconSize,
  texts,
}: IFooterProps) {
  const fontTheme = classnames(
    'flex flex-col space-y-2 text-sm',
    theme == 'dark' ? 'text-white' : 'text-gray-500',
    fontClassNames,
  );
  const fontHeaderTheme = classnames(
    'font-semibold',
    theme == 'dark' ? 'text-[#bce1ff]' : 'text-gray-900',
    fontHeaderClassNames,
  );
  const bgGradientTheme = classnames(
    theme == 'dark'
      ? 'bg-gradient-to-r from-[#11173a] via-[#3a5594] to-[#11173a]'
      : 'bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100',
  );
  const bgFooterGradientTheme = classnames(
    theme == 'dark'
      ? 'mx-auto w-full bg-black px-4 py-4 sm:px-6 lg:px-8'
      : 'mx-auto w-full bg-white px-4 py-4 sm:px-6 lg:px-8',
  );

  const socialMediaTheme = classnames(
    'duration-300 ease-in-out',
    theme == 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-400',
    socialMediaClassName,
  );

  return type == 'double' ? (
    <footer className={bgGradientTheme}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {routes.map((x, z) => (
              <div key={z}>
                <p className={fontHeaderTheme}>{x.title}</p>
                <nav className={fontTheme}>
                  {x.children.map((y, w) => (
                    <a key={w} className="hover:opacity-75" href={y.href}>
                      {' '}
                      {y.name}{' '}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <p className={`mt-8 text-xs ${theme == 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          © {new Date().getFullYear().toString()} {companyName}
        </p>
      </div>
      <div className={bgFooterGradientTheme}>
        <div
          className="mx-auto h-full w-full"
          style={{
            maxWidth: '1440px',
          }}
        >
          <div className="w-full items-center md:flex md:justify-between">
            <img src={theme == 'dark' ? darkLogo : lightLogo} className="mr-5 h-6 sm:h-9" alt="logo" />
            <div className="max-md:mt-8 flex items-center">
              {subDescription && <p className="max-w-xs text-sm text-gray-600">{subDescription}</p>}
              {socialMedia && (
                <div className="flex space-x-6">
                  {socialMedia.facebook && (
                    <a className={socialMediaTheme} href={socialMedia.facebook.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> Facebook </span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {socialMedia.pinterest && (
                    <a className={socialMediaTheme} href={socialMedia.pinterest.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> Pinterest </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill-rule="nonzero"
                          fill="currentColor"
                          d="M0 256c0 109.29 68.5 202.6 164.91 239.32-2.35-19.99-4.84-52.95.53-76.07 4.63-19.89 29.89-126.68 29.89-126.68s-7.62-15.25-7.62-37.85c0-35.41 20.53-61.87 46.11-61.87 21.76 0 32.25 16.33 32.25 35.89 0 21.87-13.93 54.55-21.12 84.87-5.99 25.36 12.74 46.05 37.74 46.05 45.29 0 80.13-47.77 80.13-116.71 0-61.04-43.86-103.68-106.48-103.68-72.48 0-115.04 54.38-115.04 110.59 0 21.91 8.42 45.38 18.96 58.16a7.568 7.568 0 012.07 5.21c0 .7-.1 1.41-.29 2.09-1.94 8.07-6.26 25.37-7.08 28.9-1.13 4.65-3.69 5.66-8.54 3.4-31.82-14.81-51.71-61.34-51.71-98.71 0-80.41 58.4-154.22 168.36-154.22 88.41 0 157.13 63 157.13 147.18 0 87.83-55.37 158.53-132.25 158.53-25.84 0-50.09-13.45-58.41-29.3 0 0-12.78 48.68-15.88 60.59-6.01 23.13-22.7 52.39-33.04 69.01 23.84 7.36 49.14 11.3 75.38 11.3 141.38 0 256-114.63 256-256S397.38 0 256 0 0 114.62 0 256z"
                        />
                      </svg>
                    </a>
                  )}
                  {socialMedia.threads && (
                    <a className={socialMediaTheme} href={socialMedia.threads.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> Threads </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="nonzero"
                          d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"
                        />
                      </svg>
                    </a>
                  )}
                  {socialMedia.instagram && (
                    <a className={socialMediaTheme} href={socialMedia.instagram.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> Instagram </span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {socialMedia.twitter && (
                    <a className={socialMediaTheme} href={socialMedia.twitter.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> Twitter </span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {socialMedia.linkedin && (
                    <a className={socialMediaTheme} href={socialMedia.linkedin.url} target="_blank" rel="noreferrer">
                      <span className="sr-only"> GitHub </span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <footer className={bgGradientTheme}>
      <div className={classnames(bgFooterGradientTheme, classNames)}>
        <div
          className="mx-auto h-full w-full"
          style={{
            maxWidth: '1440px',
          }}
        >
          <div className="flex w-full items-center md:justify-between sm-mw:flex-col sm-mw:items-center">
            <div className="md:mr-5 md:flex md:flex-col md:items-center">
              <img
                src={theme == 'dark' ? darkLogo : lightLogo}
                className={classnames('h-6 sm:h-12 md:mr-5 md:h-16 sm-mw:mb-8 sm-mw:h-12', iconSize)}
                alt="logo"
              />
              {subDescription && (
                <p className="max-w-xs text-center text-sm text-gray-600 md:mt-4 sm-mw:hidden sm-mw:text-center">
                  {subDescription}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center md:my-8">
              <div className="max-md:mt-8 mb-7 flex items-center">
                {socialMedia && (
                  <div className="flex space-x-6">
                    {socialMedia.facebook && (
                      <a className={socialMediaTheme} href={socialMedia.facebook.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> Facebook </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill={theme == 'dark' ? '#6C6C6C' : '#000'}
                            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia.instagram && (
                      <a className={socialMediaTheme} href={socialMedia.instagram.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> Instagram </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill={theme == 'dark' ? '#6C6C6C' : '#000'}
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia.pinterest && (
                      <a className={socialMediaTheme} href={socialMedia.pinterest.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> Pinterest </span>
                        <svg
                          width="24"
                          height="24"
                          id="Layer_2"
                          data-name="Layer 2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          imageRendering="optimizeQuality"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                        >
                          <path
                            d="M0,12c0,5.12,3.21,9.5,7.73,11.22-.11-.94-.23-2.48.02-3.57.22-.93,1.4-5.94,1.4-5.94,0,0-.36-.71-.36-1.77,0-1.66.96-2.9,2.16-2.9,1.02,0,1.51.77,1.51,1.68,0,1.03-.65,2.56-.99,3.98-.28,1.19.6,2.16,1.77,2.16,2.12,0,3.76-2.24,3.76-5.47,0-2.86-2.06-4.86-4.99-4.86-3.4,0-5.39,2.55-5.39,5.18,0,1.03.39,2.13.89,2.73.06.07.1.15.1.24,0,.03,0,.07-.01.1-.09.38-.29,1.19-.33,1.35-.05.22-.17.27-.4.16-1.49-.69-2.42-2.88-2.42-4.63,0-3.77,2.74-7.23,7.89-7.23,4.14,0,7.37,2.95,7.37,6.9s-2.6,7.43-6.2,7.43c-1.21,0-2.35-.63-2.74-1.37,0,0-.6,2.28-.74,2.84-.28,1.08-1.06,2.46-1.55,3.23,1.12.34,2.3.53,3.53.53,6.63,0,12-5.37,12-12S18.63,0,12,0,0,5.37,0,12Z"
                            fill="currentColor"
                            stroke-width="0"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia.threads && (
                      <a className={socialMediaTheme} href={socialMedia.threads.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> Threads </span>
                        <svg
                          width="24"
                          height="24"
                          id="Layer_2"
                          data-name="Layer 2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 27.9"
                          imageRendering="optimizeQuality"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                        >
                          <path
                            d="M18.68,12.93c-.12-.06-.24-.11-.37-.17-.22-3.97-2.38-6.24-6.02-6.26-2.1-.01-3.98.84-5.15,2.62l2,1.37c.83-1.26,2.14-1.53,3.1-1.53.01,0,.02,0,.03,0,1.2,0,2.1.36,2.69,1.04.43.49.71,1.18.85,2.04-1.06-.18-2.21-.24-3.44-.17-3.46.2-5.69,2.22-5.54,5.02.08,1.42.78,2.65,2,3.45,1.02.68,2.34,1.01,3.71.93,1.81-.1,3.23-.79,4.22-2.05.75-.96,1.23-2.2,1.44-3.77.86.52,1.5,1.21,1.85,2.03.6,1.4.64,3.7-1.24,5.58-1.64,1.64-3.62,2.35-6.61,2.38-3.31-.02-5.82-1.09-7.45-3.16-1.53-1.94-2.31-4.74-2.34-8.33.03-3.59.82-6.39,2.34-8.33,1.63-2.07,4.14-3.13,7.45-3.16,3.34.02,5.89,1.09,7.58,3.17.83,1.02,1.46,2.3,1.87,3.8l2.35-.63c-.5-1.84-1.29-3.43-2.36-4.75C19.47,1.4,16.3.03,12.21,0h-.02C8.12.03,4.98,1.4,2.88,4.08,1,6.46.03,9.78,0,13.94h0s0,.02,0,.02c.03,4.16,1,7.47,2.87,9.86,2.11,2.68,5.24,4.05,9.32,4.08h.02c3.63-.03,6.18-.97,8.29-3.08,2.76-2.75,2.67-6.2,1.76-8.32-.65-1.52-1.89-2.75-3.59-3.57h0ZM12.41,18.82c-1.52.09-3.09-.6-3.17-2.05-.06-1.08.77-2.29,3.26-2.43.29-.02.57-.02.84-.02.91,0,1.75.09,2.52.26-.29,3.59-1.97,4.17-3.46,4.25h0Z"
                            stroke-width="0"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia?.twitter && (
                      <a className={socialMediaTheme} href={socialMedia?.twitter.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> Twitter </span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {socialMedia?.linkedin && (
                      <a
                        className={socialMediaTheme}
                        href={socialMedia?.linkedin?.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only"> GitHub </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill={theme == 'dark' ? '#6C6C6C' : '#000'}
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia?.youtube && (
                      <a className={socialMediaTheme} href={socialMedia?.youtube?.url} target="_blank" rel="noreferrer">
                        <span className="sr-only"> GitHub </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill={theme == 'dark' ? '#6C6C6C' : '#000'}
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center sm-mw:mb-8">
                <div className="mb-3 flex items-center justify-between text-center">
                  <a href={links?.politics} className={classnames(fontTheme, 'underline')}>
                    {texts?.politics ?? 'Política de privacidade'}
                  </a>
                  <div
                    className="mx-3"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: ballColors ?? '#00DFEB',
                    }}
                  ></div>
                  <a href={mailToHref} className={classnames(fontTheme, 'underline')}>
                    {texts?.contact ?? 'Contato editorial'}
                  </a>
                </div>
                <div className="flex items-center justify-between text-center">
                  <a href={`${mailToHref}`} className={classnames(fontTheme, 'underline')}>
                    {texts?.partners ?? 'Parcerias comerciais'}
                  </a>
                  <div
                    className="mx-3"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: ballColors ?? '#00DFEB',
                    }}
                  ></div>
                  <a href={links?.about} className={classnames(fontTheme, 'underline')}>
                    Sobre o {company}
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-xs sm-mw:mb-8">
              <p className="mb-6 max-w-xs text-center text-sm font-light text-white">
                {dpoDesc ?? 'Nosso Encarregado pelo tratamento de Dados Pessoais (DPO):'}
              </p>
              <p className="max-w-xs text-center text-base font-semibold text-white">{dpoName}</p>
            </div>
            {subDescription && (
              <p className="max-w-xs text-sm text-gray-600 sm:hidden sm-mw:text-center">{subDescription}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
