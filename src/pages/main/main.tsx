import './main.scss';
import React, { Component } from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <SearchBar />
        <CardList />
      </main>
    );
  }
}

export default Main;
