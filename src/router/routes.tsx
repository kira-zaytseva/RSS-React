import AboutUs from './../pages/aboutUs/aboutUs';
import React from 'react';
import App from '../App';
import ErrorPage from './../pages/errorPage/errorPage';
import Main from './../pages/main/main';

export enum Route {
  MAIN = '/',
  ABOUT = '/about',
}

interface PathNames {
  [key: string]: string;
}

export const pageNames: PathNames = {
  '/': 'MainPage: Gallery',
  '/about': 'About Us',
};

export const routes = [
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Route.MAIN,
        element: <Main />,
      },
      {
        path: Route.ABOUT,
        element: <AboutUs />,
      },
    ],
  },
];
