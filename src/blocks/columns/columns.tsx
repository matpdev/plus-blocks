'use client';

import classNames from 'classnames';
import React from 'react';

export default function Columns(
  { children }: React.PropsWithChildren,
  { classname, wrap = false }: { classname?: string; wrap?: boolean },
) {
  return <div className={classNames('flex', wrap ? 'flex-wrap' : '', classname, 'md-mw:flex-wrap')}>{children}</div>;
}
