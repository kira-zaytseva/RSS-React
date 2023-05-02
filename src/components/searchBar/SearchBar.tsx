import Button from './../../components/button/Button';
import React from 'react';
import Input from '../../components/input/Input';
import { SearchBarProps } from './types';
import './SearchBar.scss';

function SearchBar({ onChange, searchValue, onSearch }: SearchBarProps) {
  return (
    <form className="search-form" data-testid="SearchBar" onSubmit={onSearch}>
      <Input type="search" classes="search-input" value={searchValue} onChange={onChange} />
      <Button btnText="search" />
    </form>
  );
}

export default SearchBar;
