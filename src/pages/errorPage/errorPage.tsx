import { Header } from '../../components/Header/Header';
import React, { Component } from 'react';
import './errorPage.scss';
import Footer from '../../components/Footer/Footer';

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <main className="main">
          <h1 className="error-title" data-testid="ErrorPage">
            Oops, page doesn`t exist
          </h1>
          <img src="https://i.imgur.com/25BmMeM.jpg" alt="" className="error-image" />
        </main>
        <Footer />
      </div>
    );
  }
}
