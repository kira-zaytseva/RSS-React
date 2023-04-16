import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  it('renders input', () => {
    render(<Input type="text" id="test" />);

    screen.debug();

    expect(screen.getByTestId('Input')).toBeInTheDocument();
  });
});
