import { render, screen } from '@testing-library/react';
import React from 'react';

import CardList from './CardList';

describe('CardList', () => {
  it('renders cardList', () => {
    render(<CardList classes="profile-card" list={[]} />);

    screen.debug();

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
  });
});
