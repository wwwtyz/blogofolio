import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonStyle, ButtonType } from './Button';

export const getAppearanceStyles = ({
  buttonStyle = ButtonStyle.Primary
}: Pick<ButtonType, 'buttonStyle'>) => {
  if (buttonStyle === ButtonStyle.Outline) {
    return css`
      background-color: transparent;
      color: var(--bs-color-error);

      &:hover:not(:disabled) {
        box-shadow: inset 0 0 0 1px var(--bs-color-border);
      }
    `;
  }

  if (buttonStyle === ButtonStyle.Secondary) {
    return css`
      background-color: var(--bs-color-bg-light);
      color: var(--bs-color-text);

      &:hover:not(:disabled) {
        background-color: var(--bs-color-bg-medium);
      }
    `;
  }
};
export const ButtonContainer = styled.button<ButtonType>`
  padding: 1rem;
  background: transparent;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #5360cd;
  }
`;

export const ButtonImage = styled.img`
  width: 24px;
  height: auto;
`;
