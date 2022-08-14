import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DotLabel from '../../components/atoms/Label/DotLabel';

export default {
  title: 'atoms/DotLabel',
  component: DotLabel,
} as ComponentMeta<typeof DotLabel>;

const Template: ComponentStory<typeof DotLabel> = (args) => (
  <DotLabel {...args} />
);

export const DefaultDotLabel = Template.bind({});
DefaultDotLabel.args = {
  label: "I'm the default one",
};

export const DotRedLabel = Template.bind({});
DotRedLabel.args = {
  label: "I'm on fire",
  bgColor: 'red',
};
