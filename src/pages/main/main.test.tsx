import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import Main from './main';

const store = setupStore();

describe('Main', () => {
  it('renders Main', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    screen.debug();
  });
});
