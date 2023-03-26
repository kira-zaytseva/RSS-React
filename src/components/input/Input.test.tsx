import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  it('input header', () => {
    render(<Input type="text" id="test" label="test" />);

    screen.debug();

    expect(screen.getByTestId('Input')).toBeInTheDocument();
  });
});
