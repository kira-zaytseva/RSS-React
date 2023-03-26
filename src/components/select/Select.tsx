import React, { Component } from 'react';
import { SelectProp } from './type';
import './select.scss';

class Select extends Component<SelectProp> {
  render() {
    const { classes, options, id, label, defaultValue } = this.props;
    return (
      <fieldset className="select-fieldset">
        <label htmlFor={id}>{label}</label>
        <select className={`select ${classes}`} id={id} defaultValue={defaultValue}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }
}

export default Select;
