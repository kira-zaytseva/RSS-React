import Button from './../../components/button/Button';
import React, { Component } from 'react';
import './SearchBar.scss';
import { getStorageByKey, setStorageByKey } from './../../utils/storage';

class SearchBar extends Component {
  state = { value: '' };

  componentDidMount() {
    const currentSearch = getStorageByKey('searchValue');
    this.setState({ value: currentSearch });
  }

  componentWillUnmount() {
    setStorageByKey('searchValue', this.state.value);
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          onChange={this.onChange}
          value={this.state.value}
        ></input>
        <Button btnText="SEARCH" />
      </form>
    );
  }
}

export default SearchBar;
