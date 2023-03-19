import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
  it('renders button', () => {
    render(<Button btnText="hi" />);

    screen.debug();
  });
});
