import './App.scss';
import React from 'react';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
