import React from 'react';
import { FormFieldProp } from './type';
import './FormField.scss';
import Input from '../../components/input/Input';

const FormField = React.forwardRef<HTMLInputElement, FormFieldProp>(
  (
    {
      classes,
      type,
      placeholder,
      id,
      label,
      fieldsetClasses,
      labelClasses,
      error,
      onChange,
      value,
      name,
      onBlur,
    },
    ref
  ) => {
    return (
      <fieldset className={`form-fieldset ${fieldsetClasses}`} data-testid="FormField">
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <Input
          id={id}
          classes={classes}
          type={type}
          placeholder={placeholder}
          currentRef={ref}
          onChange={onChange}
          value={value}
          name={name}
          onBlur={onBlur}
        ></Input>
        {error && <span className="form-error">{error}</span>}
      </fieldset>
    );
  }
);

export default FormField;
