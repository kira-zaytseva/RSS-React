import Header from './../../components/header/header';
import React from 'react';
import './errorPage.scss';
import Footer from './../../components/footer/footer';

export default function ErrorPage() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main">
        <h1 className="error-title">Oops, page doesn`t exist</h1>
      </main>
      <Footer />
    </div>
  );
}
