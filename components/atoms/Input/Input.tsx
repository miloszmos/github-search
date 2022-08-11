import React, { InputHTMLAttributes } from 'react';
import { InputStyles } from './Input.styles';

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyles {...rest} />;
};

export default Input;
