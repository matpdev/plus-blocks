'use client';

import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { forwardRef, ReactNode } from 'react';
import InputSimple, { IInputSimple, IInputSimpleError } from './InputSimple';
export interface IInputSimpleErrors {
  [key: string]: IInputSimpleError;
}
export interface IInputSimpleControl extends IInputSimple {
  label: string;
  help?: ReactNode;
  errors?: IInputSimpleErrors;
}
const InputSimpleControl = forwardRef<HTMLInputElement, Partial<IInputSimpleControl>>((props, ref) => {
  const {
    label,
    help,
    type,
    name,
    id,
    placeholder,
    disabled,
    size,
    isInvalid,
    value,
    mask,
    maskChar,
    formatChars,
    alwaysShowMask,
    onChange,
    onBlur,
    errors,
  } = props;
  const error = errors && name && errors[name] ? errors[name] : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1">
        <InputSimple
          {...{
            type,
            name,
            id,
            placeholder,
            disabled,
            size,
            error,
            value,
            onChange,
            onBlur,
            mask,
            maskChar,
            formatChars,
            alwaysShowMask,
          }}
          ref={ref}
        />
        {isInvalid && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {help && (
        <p className="mt-1 text-xs text-gray-500" id={`${id || name}-help`}>
          {help}
        </p>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-600" id={`${id || name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
});
InputSimpleControl.displayName = 'InputSimpleControl';
export default InputSimpleControl;
