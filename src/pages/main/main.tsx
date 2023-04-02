import './main.scss';
import React from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';

const Main = () => {
  return (
    <main className="main">
      <SearchBar />
      <CardList />
    </main>
  );
};

export default Main;
