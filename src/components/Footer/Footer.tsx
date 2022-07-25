import React from 'react';
import { FooterContainer, FooterContent } from './footer.styled';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>{`\u00A9${currentYear} TMS`}</p>
        <p>All rights reserved</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
