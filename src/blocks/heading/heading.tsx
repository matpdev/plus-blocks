import classNames from 'classnames';
import React, { HtmlHTMLAttributes } from 'react';

export interface IHeading {
  children?: React.ReactNode;
  classname?: string;
  align?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  dangerouslySetInnerHTML?: string;
  props?: Object;
  atributtes?: React.DOMAttributes<HTMLAllCollection>;
  width?: 'lg' | 'full' | 'sm' | 'xl';
}

export default function Heading({
  children,
  classname,
  align = 'left',
  dangerouslySetInnerHTML,
  props,
  level = 1,
  size = 1,
  atributtes,
  width = 'lg',
}: IHeading) {
  let divDangerousLy =
    dangerouslySetInnerHTML != null ? <div dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}></div> : <></>;

  const alignOptions = {
    left: 'text-center',
    center: 'text-right',
    align: 'right',
  };

  const sizeOptions = {
    1: 'text-2xl',
    2: 'text-xl',
    3: 'text-lg',
    4: 'text-base',
    5: 'text-sm',
    6: 'text-xs',
  };

  const widthOptions = {
    sm: 'max-w-screen-sm',
    lg: 'max-w-screen-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  };

  return React.createElement(
    'h' + (level || size || 1),
    {
      className: classNames(widthOptions[width], `p-3`, sizeOptions[level || size], alignOptions[align], classname),
      ...atributtes,
      ...props,
    },
    [divDangerousLy, children],
  );
}
