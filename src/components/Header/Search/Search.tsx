import React from 'react';
import Button from 'components/Button/Button';
import SearchIcon from '../../../assets/svg/search.svg';
import { SearchContainer } from './search.styled';

function Search() {
  return (
    <SearchContainer>
      <input
        type="search"
        placeholder="Search..."
      />

      <Button svg={SearchIcon} />
    </SearchContainer>
  );
}

export default Search;
