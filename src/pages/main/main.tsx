import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './../../components/searchBar/SearchBar';
import CardList from './../../components/cardList/CardList';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import { GalleryService } from '../../API/galleryService';
import { ArtWork } from '../../API/types';
import './main.scss';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [arts, setArts] = useState<ArtWork[] | []>([]);
  const searchValueRef = useRef(searchValue);

  const getArts = async () => {
    try {
      const { data: art, errors, ...rest } = await GalleryService.getArts();
      console.log(art, rest);
      if (errors) {
        return errors;
      }
      setArts(art);
    } catch (e) {
      console.log(e);
    }
  };

  const searchArts = async (searchValue: string) => {
    try {
      const { data: art, errors } = await GalleryService.searchArt(searchValue);
      if (errors) {
        return errors;
      }
      setArts(art);
    } catch (e) {
      console.log(e);
    }
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
    getArts();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchValueRef.current = e.target.value;
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchArts(searchValue);
  };
  return (
    <main className="main">
      <SearchBar onChange={onChange} searchValue={searchValue} onSearch={onSearch} />
      <CardList list={arts} />
    </main>
  );
};

export default Main;
