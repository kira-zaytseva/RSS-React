import { AboutUs } from './../pages/aboutUs/aboutUs';
import React from 'react';
import { ErrorPage } from './../pages/errorPage/errorPage';
import Main from './../pages/main/main';
import Form from '../pages/form/Form';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { Header } from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import '../App.scss';
import '../index.css';

const store = setupStore();

export enum RouteName {
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

export const Router = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
};
