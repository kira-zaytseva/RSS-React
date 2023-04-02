import Button from './../../components/button/Button';
import React, { useEffect, useState, useRef } from 'react';
import './SearchBar.scss';
import { getStorageByKey, setStorageByKey } from './../../utils/storage';
import Input from '../../components/input/Input';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const searchValueRef = useRef(searchValue);

  useEffect(() => {
    const currentSearch = getStorageByKey('searchValue');
    if (currentSearch) {
      setSearchValue(currentSearch);
      searchValueRef.current = currentSearch;
    }
    return () => {
      setStorageByKey('searchValue', searchValueRef.current);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchValueRef.current = e.target.value;
  };

  return (
    <form className="search-form" data-testid="SearchBar">
      <Input type="search" classes="search-input" onChange={onChange} value={searchValue} />
      <Button btnText="search" />
    </form>
  );
}

export default SearchBar;
