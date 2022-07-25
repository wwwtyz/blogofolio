import React from 'react';
import { ButtonContainer } from './button.styled';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline'
}
export interface ButtonType {
  buttonStyle?: ButtonStyle;
  svg: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonType> = ({ svg, onClick, ...props }) => {
  return (
    <ButtonContainer
      svg={''}
      onClick={onClick}
      {...props}
    >
      <img
        src={svg}
        alt="svg"
      />
    </ButtonContainer>
  );
};

export default Button;
