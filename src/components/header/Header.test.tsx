import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

describe('Header', () => {
  it('renders header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    screen.debug();
  });
});
