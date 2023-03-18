import Button from './../../components/button/Button';
import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <form className="search-form">
      <input type="search" className="search-input"></input>
      <Button btnText="SEARCH" />
    </form>
  );
};

export default SearchBar;
