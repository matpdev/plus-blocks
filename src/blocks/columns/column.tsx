'use client';

import React from 'react';

interface IColumn extends React.PropsWithChildren {
  width: string;
}

export default function Column({ children, width }: IColumn) {
  return (
    <div
      className="min-[768px]:grow md-mw:flex-wrap md-mw:!w-full mx-4 break-words md:mx-10"
      style={{
        width,
        flexGrow: Number(String(width).substring(String(width).indexOf('%'), -1)) >= 50 ? '1' : '0',
      }}
    >
      {children}
    </div>
  );
}
