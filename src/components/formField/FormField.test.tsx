import { render, screen } from '@testing-library/react';
import React from 'react';
import FormField from './FormField';

describe('FormField', () => {
  it('renders formfield', () => {
    render(<FormField type="text" id="test" label="test" />);

    screen.debug();

    expect(screen.getByTestId('FormField')).toBeInTheDocument();
  });
});
