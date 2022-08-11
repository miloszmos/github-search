import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';
import {
  BackButtonStyles,
  ColorVariantsType,
  IconWrapper,
} from './Button.styles';

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
