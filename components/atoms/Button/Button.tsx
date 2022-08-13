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
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  rightIcon,
  leftIcon,
  type = 'button',
  color = 'black',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <BackButtonStyles color={color} type={type} {...rest}>
      {leftIcon && <IconWrapper left>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper right>{rightIcon}</IconWrapper>}
    </BackButtonStyles>
  );
};

export default Button;
