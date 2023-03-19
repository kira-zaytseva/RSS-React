import React, { Component } from 'react';
import './Button.scss';
import { ButtonProp } from './types';

class Button extends Component<ButtonProp> {
  render() {
    const { btnText, classes } = this.props;
    return (
      <button type="submit" className={`button ${classes}`}>
        {btnText}
      </button>
    );
  }
}

export default Button;
