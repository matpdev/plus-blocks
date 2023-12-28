'use client';

import classnames from 'classnames';

export interface I404Props {
  theme?: 'none' | 'dark' | 'light';
  classNames?: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  number: string;
  buttonText: string;
}
const themeLoadingClasses = {
  dark: 'text-gray-200 dark:text-white fill-white',
  light: 'text-gray-200 dark:text-black fill-purple-600',
};
export default function PageError({ theme, classNames, imageUrl, title, number, subTitle, buttonText }: I404Props) {
  const fontTheme = classnames(
    'mt-4 flex flex-col space-y-2 text-sm',
    theme == 'dark' ? 'text-white' : 'text-gray-500',
    classNames,
  );
  const fontHeaderTheme = classnames('font-semibold', theme == 'dark' ? 'text-[#bce1ff]' : 'text-gray-900');
  const bgGradientTheme = classnames(
    theme == 'dark'
      ? 'bg-gradient-to-r from-[#11173a] via-[#3a5594] to-[#11173a]'
      : 'bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100',
  );
  const bgFooterGradientTheme = classnames(
    theme == 'dark'
      ? 'flex h-screen w-full flex-col items-center justify-center space-y-16 space-x-8 lg:flex-row lg:space-y-0 2xl:space-x-0 bg-black'
      : 'flex h-screen w-full flex-col items-center justify-center space-y-16 space-x-8 lg:flex-row lg:space-y-0 2xl:space-x-0 bg-white',
  );

  const socialMediaTheme = classnames('duration-300 ease-in-out', theme == 'dark' ? 'text-gray-300' : 'text-gray-600');

  return (
    <div className={bgFooterGradientTheme}>
      <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/2 lg:px-2 xl:px-0">
        <p className={classnames('text-7xl font-bold tracking-wider md:text-8xl lg:text-9xl', socialMediaTheme)}>
          {number}
        </p>
        <p className={classnames('mt-2 text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl', socialMediaTheme)}>
          {title}
        </p>
        <p className={classnames('my-12 text-lg md:text-xl lg:text-2xl', socialMediaTheme)}>{subTitle}</p>
        <a
          href="/"
          className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700"
          title="Return Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{buttonText}</span>
        </a>
      </div>
      <div className="flex w-1/2 justify-center p-4 lg:h-full lg:items-end">
        <img src={imageUrl}></img>
      </div>
    </div>
  );
}
