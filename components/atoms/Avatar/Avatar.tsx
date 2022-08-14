import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Size = 'large' | 'small';

interface AvatarProps {
  src: string;
  alt: string;
  size?: Size;
}

const sizeType: { [key: string]: number } = {
  large: 296,
  small: 20,
};

const Avatar = ({ src, alt, size = 'small' }: AvatarProps) => {
  return (
    <ImageStyles
      src={src}
      alt={alt}
      aria-label="user avatar"
      width={sizeType[size] || 296}
      height={sizeType[size] || 296}
    />
  );
};

export default Avatar;

const ImageStyles = styled(Image)`
  border-radius: 50%;
`;
