'use client';

import classNames from 'classnames';
import SpinnerIcon from '../icons/Spinner';
export default function LoadingArea({ className, label }: any) {
  const classes = classNames([className, 'flex flex-col items-center justify-center py-16']);
  return (
    <div className={classes}>
      <SpinnerIcon className="mb-2 h-6 w-6 fill-indigo-700" />
      <div className="text-xl font-bold text-gray-500 sm:text-xl">{label || 'Carregando...'}</div>
    </div>
  );
}
