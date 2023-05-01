import React, { useMemo } from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';
import './main.scss';
import { galleryApi } from '../../API/galleryService';

const Main = () => {
  const dispatch = useAppDispatch();
  const { searchValue, submittedSearch } = useAppSelector((state) => state.searchReducer);
  const { data: arts, isLoading } = galleryApi.useFetchAllArtsQuery('');
  const { data: searchedArts, isLoading: isLoadingSearchedArts } =
    galleryApi.useFetchSearchingArtsQuery(submittedSearch);

  const currentArts = useMemo(() => {
    if (submittedSearch && searchedArts?.data) {
      return searchedArts.data;
    }

    return arts?.data || [];
  }, [arts, searchedArts, submittedSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.search(e.target.value));
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchSlice.actions.submitSearch(searchValue));
  };

  return (
    <main className="main-wrapper">
      <SearchBar onChange={onChange} searchValue={searchValue} onSearch={onSearch} />
      {submittedSearch && <p>Result of searching: {submittedSearch}</p>}
      {isLoading || isLoadingSearchedArts ? (
        <p className="response-progress">Wainting... Response is in progress</p>
      ) : (
        <CardList list={currentArts} />
      )}
    </main>
  );
};

export default Main;
