import React from 'react';
import * as NextImage from 'next/image';
import GlobalStyle from '../styles/globalStyles';
import { addDecorator } from '@storybook/react';

const OriginalNextImage = NextImage.default;

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
