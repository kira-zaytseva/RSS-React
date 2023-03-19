import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />);

    screen.debug();
  });
});
