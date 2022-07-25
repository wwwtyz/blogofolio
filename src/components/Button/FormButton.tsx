import React from 'react';
import { ButtonType } from './Button';
import { ButtonContainer } from './button.styled';

const FormButton: React.FC<ButtonType> = ({ children, onClick, ...props }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default FormButton;
