import React from 'react';
import { SelectProp } from './type';
import './select.scss';

const Select = React.forwardRef<HTMLSelectElement, SelectProp>(
  ({ classes, options, id, label, defaultValue, error, onBlur, onChange, name }, ref) => {
    return (
      <fieldset className="select-fieldset" data-testid="Select">
        <label htmlFor={id}>{label}</label>
        <select
          className={`select ${classes}`}
          id={id}
          defaultValue={defaultValue}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <span className="form-error">{error}</span>}
      </fieldset>
    );
  }
);

export default Select;
