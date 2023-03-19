import { render, screen } from '@testing-library/react';
import React from 'react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders searchBar', () => {
    render(<SearchBar />);

    screen.debug();
  });
});
