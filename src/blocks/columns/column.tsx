'use client';

import classNames from 'classnames';
import React from 'react';

interface IColumn extends React.PropsWithChildren {
  width: string;
  breakWords?: boolean;
}

export default function Column({ children, width, breakWords }: IColumn) {
  return (
    <div
      className={classNames(
        'min-[768px]:grow md-mw:flex-wrap md-mw:!w-full mx-4 md:mx-10',
        breakWords ? 'break-words' : '',
      )}
      style={{
        width,
        flexGrow: Number(String(width).substring(String(width).indexOf('%'), -1)) >= 50 ? '1' : '0',
      }}
    >
      {children}
    </div>
  );
}
