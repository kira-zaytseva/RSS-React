import { render, screen } from '@testing-library/react';
import React from 'react';

import Select from './Select';

describe('Select', () => {
  it('renders select', () => {
    render(<Select options={['1', '2']} id="example" label="test" defaultValue="default" />);

    screen.debug();

    expect(screen.getByTestId('Select')).toBeInTheDocument();
  });
});
