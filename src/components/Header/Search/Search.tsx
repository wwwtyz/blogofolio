import React, { useEffect, useRef, useState } from 'react';

import Button from 'components/Button/Button';
import SearchIcon from '../../../assets/svg/search.svg';
import { SearchContainer } from './search.styled';

function Search() {
  let isSearching = false;
  return (
    <SearchContainer>
      {isSearching ? (
        <input
          type="search"
          placeholder="Search..."
        />
      ) : null}
      <Button image={SearchIcon} />
    </SearchContainer>
  );
}

export default Search;
