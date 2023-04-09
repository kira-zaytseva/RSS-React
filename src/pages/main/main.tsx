import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import { GalleryService } from '../../API/galleryService';
import { ArtWork } from '../../API/types';
import './main.scss';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [arts, setArts] = useState<ArtWork[] | []>([]);
  const [isInProgress, setIsInProgress] = useState(false);
  const searchValueRef = useRef(searchValue);

  const getArts = async (searchValue: string) => {
    try {
      setIsInProgress(true);
      const { data: art, errors } = await GalleryService.getArts(searchValue);
      if (errors) {
        return errors;
      }
      setArts(art);
    } catch (e) {
      console.log(e);
    }
    setIsInProgress(false);
  };

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

  useEffect(() => {
    const storageValue = getStorageByKey('searchValue');
    getArts(storageValue);
    setSubmittedSearch(storageValue);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchValueRef.current = e.target.value;
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedSearch(searchValue);
    getArts(searchValue);
    setStorageByKey('searchValue', searchValueRef.current);
  };
  return (
    <main className="main">
      <SearchBar onChange={onChange} searchValue={searchValue} onSearch={onSearch} />
      {submittedSearch && <p>Result of searching: {submittedSearch}</p>}
      {isInProgress ? (
        <p className="response-progress">Wainting... Response is in progress</p>
      ) : (
        <CardList list={arts} />
      )}
    </main>
  );
};

export default Main;
