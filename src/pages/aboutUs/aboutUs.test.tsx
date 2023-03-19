import { render, screen } from '@testing-library/react';
import React from 'react';

import AboutUs from './aboutUs';

describe('AboutUs', () => {
  it('renders AboutUs', () => {
    render(<AboutUs />);

    screen.debug();
  });
});
