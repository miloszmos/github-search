import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailsLabel from '../../components/molecules/DetailsLabel/DetailsLabel';
import UsersIcon from '../../components/atoms/Icons/UsersIcon';

export default {
  title: 'molecules/DetailsLabel',
  component: DetailsLabel,
} as ComponentMeta<typeof DetailsLabel>;

const Template: ComponentStory<typeof DetailsLabel> = (args) => (
  <DetailsLabel {...args} />
);

export const DefaultCount = Template.bind({});
DefaultCount.args = {
  count: 393,
};

export const CountWithLabel = Template.bind({});
CountWithLabel.args = {
  count: 2934,
  label: 'Followers',
};

export const IconCountWithLabel = Template.bind({});
IconCountWithLabel.args = {
  count: 2934,
  label: 'Following',
  icon: <UsersIcon />,
};
