import React, { useEffect } from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getArts } from '../../store/reducers/ActionCreators';
import { searchSlice } from '../../store/reducers/SearchSlice';
import './main.scss';

const Main = () => {
  const dispatch = useAppDispatch();
  const { isLoading, arts } = useAppSelector((state) => state.artReducer);
  const { searchValue, submittedSearch } = useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(getArts(submittedSearch));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.search(e.target.value));
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchSlice.actions.submitSearch(searchValue));
    dispatch(getArts(searchValue));
  };

  return (
    <main className="main">
      <SearchBar onChange={onChange} searchValue={searchValue} onSearch={onSearch} />
      {submittedSearch && <p>Result of searching: {submittedSearch}</p>}
      {isLoading ? (
        <p className="response-progress">Wainting... Response is in progress</p>
      ) : (
        <CardList list={arts} />
      )}
    </main>
  );
};

export default Main;
