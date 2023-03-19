import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ErrorPage from './errorPage';

describe('ErrorPage', () => {
  it('renders ErrorPage', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    screen.debug();
  });
});
