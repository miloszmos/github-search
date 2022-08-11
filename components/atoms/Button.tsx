import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';

type ColorVariantsType = 'primary' | 'gray' | 'black' | 'white';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: ColorVariantsType;
}

const Button = ({
  children,
  rightIcon,
  leftIcon,
  color = 'black',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <BackButtonStyles color={color} {...rest}>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </BackButtonStyles>
  );
};

export default Button;

const IconWrapper = styled.span<{
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

const BackButtonStyles = styled.button<{
  color: ColorVariantsType;
}>`
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  background: white;
  color: ${(props) => `var(--${props.color})`};
  &:hover {
    text-decoration: underline;
  }
`;
