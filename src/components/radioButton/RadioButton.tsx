import React, { Component } from 'react';
import { RadioButtonProp } from './type';
import './RadioButton.scss';

class RadioButton extends Component<RadioButtonProp> {
  render() {
    const { classes, legend, options, required = false } = this.props;
    return (
      <fieldset className="radio-fieldset">
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
              name={legend}
              required={required}
            ></input>
          </div>
        ))}
      </fieldset>
    );
  }
}

export default RadioButton;
