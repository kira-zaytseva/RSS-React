import { render, screen } from '@testing-library/react';
import React from 'react';

import Main from './main';

describe('Main', () => {
  it('renders Main', () => {
    render(<Main />);

    screen.debug();
  });
});
