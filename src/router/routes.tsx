import React from 'react';
import App from '../App';

export enum Route {
  WELCOME = '/',
}
export const routes = [
  {
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: Route.WELCOME,
        element: <App />,
      },
    ],
  },
];
