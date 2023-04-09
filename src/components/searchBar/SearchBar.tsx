import Button from './../../components/button/Button';
import React from 'react';
import './SearchBar.scss';
import Input from '../../components/input/Input';
import { SearchBarProps } from './types';

function SearchBar({ onChange, searchValue }: SearchBarProps) {
  return (
    <form className="search-form" data-testid="SearchBar">
      <Input type="search" classes="search-input" onChange={onChange} value={searchValue} />
      <Button btnText="search" />
    </form>
  );
}

export default SearchBar;
