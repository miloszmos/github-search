import styled, { css } from 'styled-components';

export type ColorVariantsType = 'primary' | 'gray' | 'black' | 'white';

export const IconWrapper = styled.span<{
  left?: boolean;
  right?: boolean;
}>`
  ${(props) =>
    props.left &&
    css`
      margin-right: 9px;
    `}
  ${(props) =>
    props.right &&
    css`
      margin-left: 9px;
    `}
`;

export const BackButtonStyles = styled.button<{
  color: ColorVariantsType;
}>`
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  background: white;
  color: ${(props) => `var(--${props.color})`};

  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    cursor: not-allowed;
    color: #8d959f;
  }
`;
