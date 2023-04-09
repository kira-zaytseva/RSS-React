import { render, screen } from '@testing-library/react';
import React from 'react';

import Card from './Card';

describe('Card', () => {
  it('renders card', () => {
    render(<Card key="2" imgId="./" imgAlt="test" cardTitle="Masterpiece" imgAuthor="Monet" />);

    screen.debug();

    expect(screen.getByTestId('Card')).toBeInTheDocument();
  });
});
