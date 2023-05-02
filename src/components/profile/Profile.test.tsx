import { render, screen } from '@testing-library/react';
import React from 'react';

import Profile from './Profile';

describe('Header', () => {
  it('renders header', () => {
    render(
      <Profile
        userName="Kira Zaytsava"
        birthday="1997-03-05"
        country="Belarus"
        gender={true}
        avatar="blob:http://localhost:5173/6a68b6ed-3681-4d03-b5cd-0c40cc46fc96"
        policy={true}
        marketing={false}
      />
    );

    screen.debug();

    expect(screen.getByTestId('Profile')).toBeInTheDocument();
  });
});
