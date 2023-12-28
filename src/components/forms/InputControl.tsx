'use client';

import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { forwardRef, ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Input, { IInput } from './Input';
export interface IInputControl extends IInput {
  label: string;
  help?: ReactNode;
  errors?: FieldErrors;
  className?: string;
}
const InputControl = forwardRef<HTMLInputElement, Partial<IInputControl & ReturnType<UseFormRegister<any>>>>(
  (props, ref) => {
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
      className,
    } = props;
    const error = errors && name && errors[name] ? errors[name] : undefined;

    return (
      <div className={className}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1">
          <Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            size={size}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            mask={mask}
            maskChar={maskChar}
            formatChars={formatChars}
            alwaysShowMask={alwaysShowMask}
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
            {error.message.toString()}
          </p>
        )}
      </div>
    );
  },
);
InputControl.displayName = 'InputControl';
export default InputControl;
