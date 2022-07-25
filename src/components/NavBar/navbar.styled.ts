import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav<{ isMenuOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 200vh;
  background-color: lightgray;
  opacity: 80%;
  transition: transform 300ms ease-in-out;
  top: 84px;
  left: 0;

  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '-150%')});
`;
export const SideNavLink = styled(NavLink)`
  display: block;
  padding: var(--bs-spacing-8) var(--bs-spacing-7);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);

  &.active {
    color: var(--bs-color-error);
  }

  &:hover:not(.active) {
    opacity: 0.7;
  }
`;
