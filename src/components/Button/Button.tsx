import React from 'react';
import { ButtonContainer, ButtonImage } from './button.styled';

interface ButtonType {
  image?: string;
  onClick?: () => void;
}
function Button({ image }: ButtonType) {
  return (
    <ButtonContainer>
      <ButtonImage src={image} />
    </ButtonContainer>
  );
}

export default Button;
