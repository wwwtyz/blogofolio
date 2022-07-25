import React, { useState } from 'react';
import { HeaderContainer } from './header.styled';
import Button, { ButtonStyle } from 'components/Button/Button';
import Burger from '../../assets/svg/burger.svg';

import User from '../../assets/svg/user.svg';
import Cross from '../../assets/svg/Icon-Cancel.svg';
import Search from './Search/Search';
import { Navbar } from 'components/NavBar/NavBar';

function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Navbar isMenuOpen={isMenuOpen}></Navbar>
      <Button
        svg={isMenuOpen ? Cross : Burger}
        onClick={() => setisMenuOpen(!isMenuOpen)}
      ></Button>
      <Search></Search>
      <Button svg={User}></Button>
    </HeaderContainer>
  );
}

export default Header;
