import { render, screen } from '@testing-library/react';
import React from 'react';

import Card from './Card';

describe('Card', () => {
  it('renders card', () => {
    render(
      <Card
        key="2"
        imgLink="./"
        imgAlt="test"
        cardTitle="Masterpiece"
        imgAuthor="Vasnecov"
        imgYear="1736"
      />
    );

    screen.debug();

    expect(screen.getByTestId('Card')).toBeInTheDocument();
  });
});
