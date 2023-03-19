import './App.scss';
import React, { Component } from 'react';
import { Header } from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default App;
