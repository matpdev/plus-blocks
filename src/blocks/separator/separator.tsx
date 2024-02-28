import classNames from 'classnames';
import React, { CSSProperties } from 'react';

interface ISeparator {
  width?: 'full' | 'xl' | 'lg' | 'md';
  classnames?: string;
  style?: CSSProperties;
}

export default function Separator({ width, classnames, style }: ISeparator) {
  let widthPreset = 'w-full';

  switch (width) {
    case 'full':
      widthPreset = 'w-full';
      break;
    case 'xl':
      widthPreset = 'w-11/12';
      break;
    case 'lg':
      widthPreset = 'w-10/12';
      break;
    case 'md':
      widthPreset = 'w-1/2';
      break;
  }

  return <div className={classNames('h-px bg-black', widthPreset, 'my-6', classnames)} style={style}></div>;
}
