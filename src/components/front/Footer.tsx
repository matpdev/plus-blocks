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
  };
  links?: {
    terms?: string;
    politics?: string;
    about?: string;
    partners?: string;
  };
  dpoName: string;
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
                className="h-6 sm:h-12 md:mr-5 md:h-16 sm-mw:mb-8 sm-mw:h-12"
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill={theme == 'dark' ? '#6C6C6C' : '#000'}
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          />
                        </svg>
                      </a>
                    )}
                    {socialMedia.youtube && (
                      <a className={socialMediaTheme} href={socialMedia.youtube.url} target="_blank" rel="noreferrer">
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
                  <a href={links.politics} className={classnames(fontTheme, 'underline')}>
                    Política de privacidade
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
                    Contato editorial
                  </a>
                </div>
                <div className="flex items-center justify-between text-center">
                  <a href={`${mailToHref}`} className={classnames(fontTheme, 'underline')}>
                    Parcerias comerciais
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
                  <a href={links.about} className={classnames(fontTheme, 'underline')}>
                    Sobre o {company}
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-xs sm-mw:mb-8">
              <p className="mb-6 max-w-xs text-center text-sm font-light text-white">
                Nosso Encarregado pelo tratamento de Dados Pessoais (DPO):
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
