import styled from '@emotion/styled';

export const NavContainer = styled.nav<{ isMenuOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 200vh;
  background-color: lightgray;
  opacity: 80%;
  transition: transform 300ms ease-in-out;
  top: 84px;
  left: 0;

  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '-150%')});
`;
