import { render, screen } from '@testing-library/react';
import React from 'react';

import Form from './Form';

describe('Form', () => {
  it('renders Form', () => {
    render(<Form />);

    screen.debug();

    expect(screen.getByTestId('Form')).toBeInTheDocument();
  });
});
