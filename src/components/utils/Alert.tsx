'use client';

import classNames from 'classnames';
import { ReactNode } from 'react';
import { CheckCircleIcon } from '../icons/CheckCircle';
import { ExclamationTriangleIcon } from '../icons/ExclamationTriangle';
import { InformationCircleIcon } from '../icons/InformationCircle';
import { XCircleIcon } from '../icons/XCircle';
export interface AlertProps {
  theme: 'success' | 'warning' | 'error' | 'info';
  body: ReactNode;
  className?: string;
}
const IconMap = {
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
  info: InformationCircleIcon,
};
export default function Alert({ theme, body, className }: AlertProps) {
  const styles = classNames('border-l-4  p-4', className, {
    'border-green-600 bg-green-50 text-green-700': theme === 'success',
    'border-yellow-400 bg-yellow-50 text-yellow-700': theme === 'warning',
    'border-red-400 bg-red-50 text-red-700': theme === 'error',
    'border-blue-400 bg-blue-50 text-blue-700': theme === 'info',
  });
  const Icon = IconMap[theme];
  return (
    <div className={styles}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </div>
  );
}
