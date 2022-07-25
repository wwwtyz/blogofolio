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
      background-color: #5360cd;
      color: var(--bs-color-text);

      &:hover:not(:disabled) {
        background-color: var(--bs-color-bg-medium);
      }
    `;
  }
  return css`
    background-color: var(--bs-color-primary);
    color: var(--bs-color-text-invert);

    &:hover:not(:disabled) {
      background-color: var(--bs-color-primary-2);
    }
  `;
};
export const ButtonContainer = styled.button<ButtonType>`
  border: none;
  display: inline-flex;
  align-items: center;
  gap: var(--bs-spacing-8);
  padding: var(--bs-spacing-7) var(--bs-spacing-5);
  font-weight: var(--bs-subline-font-weight);
  font-size: var(--bs-subline-font-size);
  line-height: var(--bs-subline-line-height);
  user-select: none;
  justify-items: center;
  width: fit-content;

  ${getAppearanceStyles};

  &:disabled {
    background-color: var(--bs-color-bg-disabled);
    color: var(--bs-color-text-disabled);
    pointer-events: none;
  }
`;
