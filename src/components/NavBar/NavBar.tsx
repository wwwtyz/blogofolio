import { AppRoute } from 'enums/router';
import React, { useRef } from 'react';

import { NavContainer, SideNavLink } from './navbar.styled';

export function Navbar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <NavContainer
      ref={navbarRef}
      isMenuOpen={isMenuOpen}
    >
      <SideNavLink to={AppRoute.Main}>Main</SideNavLink>
      <SideNavLink to={AppRoute.Login}>Sign In</SideNavLink>
      <SideNavLink to={AppRoute.Register}>Sign Up</SideNavLink>
    </NavContainer>
  );
}
