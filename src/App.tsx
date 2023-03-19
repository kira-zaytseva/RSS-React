import './App.scss';
import React, { Component } from 'react';
import { Header } from './components/header/header';
import Footer from './components/footer/footer';
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
