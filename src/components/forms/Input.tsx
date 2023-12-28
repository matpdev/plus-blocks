'use client';

import classnames from 'classnames';
import {
  RefCallback,
  forwardRef
} from 'react';
import { ChangeHandler, UseFormRegister } from 'react-hook-form';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

export interface EventHandlerProps {
  target: any;
  type?: any;
}
export interface IInput extends Partial<Pick<InputMaskProps, 'mask' | 'maskChar' | 'formatChars' | 'alwaysShowMask'>> {
  ref?: RefCallback<HTMLInputElement | HTMLSelectElement>;
  name: string;
  type?: 'text' | 'email' | 'number' | 'password';
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isInvalid?: boolean;
  error?: string;
  value?: string | number | readonly string[];
  onChange?: any;
  onBlur?: ChangeHandler;
}
const sizeClasses = {
  xs: 'text-xs rounded',
  sm: 'text-sm leading-4 rounded-md',
  md: 'text-sm rounded-md',
  lg: 'text-base rounded-md',
  xl: 'text-base rounded-md',
};
const Input = forwardRef<HTMLInputElement, Partial<IInput & ReturnType<UseFormRegister<any>>>>((props, ref) => {
  const {
    type,
    name,
    required,
    id,
    placeholder,
    disabled,
    size,
    isInvalid,
    error,
    value,
    mask,
    maskChar,
    formatChars,
    alwaysShowMask,
    onChange,
    onBlur,
  } = props;

  const classes = classnames(
    sizeClasses[size || 'md'],
    {
      'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 placeholder-gray-300': !isInvalid && !error,
      'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300': isInvalid || error,
    },
    `shadow-sm  block w-full sm:text-sm rounded-md disabled:opacity-50 disabled:bg-gray-200`,
  );

  if (mask) {
    return (
      <InputMask
        inputRef={ref}
        type={type || 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        mask={mask}
        maskChar={maskChar}
        formatChars={formatChars}
        alwaysShowMask={alwaysShowMask}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classes}
      />
    );
  }
  return (
    <input
      ref={ref}
      type={type || 'text'}
      id={id}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={classes}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
});
Input.displayName = 'Input';
export default Input;
