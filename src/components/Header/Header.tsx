import React from 'react';
import { HeaderContainer } from './header.styled';
import Button from 'components/Button/Button';
import Burger from '../../assets/svg/burger.svg';

import User from '../../assets/svg/user.svg';
import Cross from '../../assets/svg/Icon-Cancel.svg';
import Search from './Search/Search';

function Header() {
  let menuOpen = false;

  return (
    <HeaderContainer>
      <Button image={menuOpen ? Cross : Burger} />
      <Search />
      <Button image={User} />
    </HeaderContainer>
  );
}

export default Header;
