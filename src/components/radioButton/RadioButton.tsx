import React from 'react';
import { RadioButtonProp } from './type';
import './RadioButton.scss';

const RadioButton: React.FC<RadioButtonProp> = ({
  classes,
  options,
  error,
  legend,
  name,
  register,
  rules,
}) => {
  return (
    <fieldset className="radio-fieldset" data-testid="RadioButton">
      <legend>{legend}</legend>
      {options?.map((el) => (
        <div key={el} className="radio-field">
          <label className="radio-label" htmlFor={el}>
            {el}
          </label>
          <input
            id={el}
            className={`radio ${classes}`}
            type="radio"
            {...(register ? { ...register(name, rules) } : {})}
            value={el}
          ></input>
        </div>
      ))}
      {error && <span className="form-error">{error}</span>}
    </fieldset>
  );
};

export default RadioButton;
