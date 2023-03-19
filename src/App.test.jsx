import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('renders app', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.debug();
  });
});
