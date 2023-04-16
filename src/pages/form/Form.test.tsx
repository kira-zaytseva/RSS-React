import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

import Form from './Form';

const store = setupStore();

describe('Form', () => {
  it('renders Form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    screen.debug();

    expect(screen.getByTestId('Form')).toBeInTheDocument();
  });
});
