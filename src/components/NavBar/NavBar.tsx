import React, { FC, useEffect, useRef, useState } from 'react';

import { NavContainer } from './navbar.styled';

export function Navbar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <NavContainer
      ref={navbarRef}
      isMenuOpen={isMenuOpen}
    >
      <a href={'/'}>Sign In</a>
      <a href={'/'}>Sign Up</a>
    </NavContainer>
  );
}
