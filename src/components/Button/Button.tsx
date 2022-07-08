import React from 'react';
import { ButtonContainer, ButtonImage } from './button.styled';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline'
}
export interface ButtonType {
  buttonStyle?: ButtonStyle;
  image?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ image, ...props }) => (
    <ButtonContainer {...props}>
      <ButtonImage src={image} />
    </ButtonContainer>
  )
);

// const Button = <HTMLButtonElement, ButtonType>({ image, ...props }) => {
//   return (
//     <ButtonContainer {...props}>
//       <ButtonImage src={image} />
//     </ButtonContainer>
//   );
// };

export default Button;
