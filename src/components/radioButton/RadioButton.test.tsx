import { render, screen } from '@testing-library/react';
import React from 'react';

import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders radio button', () => {
    render(<RadioButton legend="test" />);

    screen.debug();

    expect(screen.getByTestId('RadioButton')).toBeInTheDocument();
  });
});
