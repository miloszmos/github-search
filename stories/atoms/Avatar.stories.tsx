import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../../components/atoms/Avatar/Avatar';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  src: 'https://i.pravatar.cc/300',
  alt: 'some beautiful faces',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  src: 'https://i.pravatar.cc/300',
  alt: 'some beautiful faces',
};
