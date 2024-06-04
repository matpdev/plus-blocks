'use client';

import classNames from 'classnames';
import React from 'react';

export default function Columns({
  children,
  classname,
  wrap,
  layout,
}: React.PropsWithChildren & {
  classname?: string;
  wrap?: boolean;
  layout?: {
    type?: string;
    justifyContent?: string;
  };
}) {
  return (
    <div
      className={classNames(
        !!layout?.type ? layout.type : 'flex',
        wrap ? 'flex-wrap' : '',
        !!layout?.justifyContent ? 'justify-' + layout.justifyContent : '',
        classname,
        'md-mw:flex-wrap',
      )}
    >
      {children}
    </div>
  );
}
