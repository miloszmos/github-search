import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../components/atoms/Button/Button';
import ArrowRightIcon from '../../components/atoms/Icons/ArrowRightIcon';
import UsersIcon from '../../components/atoms/Icons/UsersIcon';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click here</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const BlackWithIconRight = Template.bind({});
BlackWithIconRight.args = {
  color: 'black',
  rightIcon: <ArrowRightIcon />,
};

export const GrayWithIconLeft = Template.bind({});
GrayWithIconLeft.args = {
  color: 'gray',
  leftIcon: <UsersIcon />,
};
