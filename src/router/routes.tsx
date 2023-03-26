import AboutUs from './../pages/aboutUs/aboutUs';
import React from 'react';
import App from '../App';
import ErrorPage from './../pages/errorPage/errorPage';
import Main from './../pages/main/main';
import Form from '../pages/form/Form';

export enum Route {
  MAIN = '/',
  ABOUT = '/about',
  FORM = '/form',
}

interface PathNames {
  [key: string]: string;
}

export const pageNames: PathNames = {
  '/': 'MainPage: Gallery',
  '/about': 'About Us',
  '/form': 'Form',
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
      {
        path: Route.FORM,
        element: <Form />,
      },
    ],
  },
];
