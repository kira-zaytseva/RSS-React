import { render, screen } from '@testing-library/react';
import React from 'react';

import CardModal from './CardModal';

describe('CardModal', () => {
  it('renders cardMpdal', () => {
    render(
      <CardModal
        key="2"
        imgId="./"
        imgAlt="test"
        cardTitle="Masterpiece"
        imgAuthor="Vasnecov"
        imgYear="1736"
        onClose={() => console.log('ok')}
      />
    );

    screen.debug();

    expect(screen.getByTestId('CardModal')).toBeInTheDocument();
  });
});
