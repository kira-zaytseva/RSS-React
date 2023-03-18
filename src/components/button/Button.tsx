import React from 'react';
import './Button.scss';
import { ButtonProp } from './types';

const Button = ({ btnText, classes }: ButtonProp) => {
  return (
    <button type="submit" className={`button ${classes}`}>
      {btnText}
    </button>
  );
};

export default Button;
