import './App.scss';
import React from 'react';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
