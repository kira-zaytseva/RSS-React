import React from 'react';
import { InputProp } from './type';
import './Input.scss';

const Input = ({
  classes,
  type,
  placeholder,
  id,
  required = false,
  currentRef,
  onChange,
  value,
  name,
  onBlur,
}: InputProp) => {
  return (
    <input
      id={id}
      className={`input ${classes}`}
      type={type}
      placeholder={placeholder}
      required={required}
      ref={currentRef}
      onChange={onChange}
      value={value}
      name={name}
      onBlur={onBlur}
      data-testid="Input"
    ></input>
  );
};

export default Input;
