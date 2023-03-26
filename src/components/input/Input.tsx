import React, { Component } from 'react';
import { InputProp } from './type';
import './Input.scss';

class Input extends Component<InputProp> {
  render() {
    const {
      classes,
      type,
      placeholder,
      id,
      label,
      required = false,
      fieldsetClasses,
      labelClasses,
    } = this.props;
    return (
      <fieldset className={`input-fieldset ${fieldsetClasses}`}>
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <input
          id={id}
          className={`input ${classes}`}
          type={type}
          placeholder={placeholder}
          required={required}
        ></input>
      </fieldset>
    );
  }
}

export default Input;
