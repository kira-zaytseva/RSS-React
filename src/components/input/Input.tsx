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
      error,
      currentRef,
    } = this.props;
    return (
      <fieldset className={`input-fieldset ${fieldsetClasses}`} data-testid="Input">
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <input
          id={id}
          className={`input ${classes}`}
          type={type}
          placeholder={placeholder}
          required={required}
          ref={currentRef}
        ></input>
        {error && <span className="input-error">{error}</span>}
      </fieldset>
    );
  }
}

export default Input;
