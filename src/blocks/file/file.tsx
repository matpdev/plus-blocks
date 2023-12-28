import classNames from 'classnames';
import React, { HtmlHTMLAttributes } from 'react';

export interface IFile {
  classname?: string;
  props?: Object;
  href: string;
  filename?: string;
}

export default function File({ classname, props, href, filename }: IFile) {
  return (
    <div {...props} className={classNames(`max-full m-3 rounded-xl`, classname)}>
      {filename && (
        <a href={href} className="mr-4 underline">
          {filename}
        </a>
      )}
      <a href={href} download={true} className="bg-slate-200 p-2 hover:bg-slate-400">
        Baixar
      </a>
    </div>
  );
}
