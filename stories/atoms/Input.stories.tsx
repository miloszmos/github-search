import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../../components/atoms/Input/Input';

export default {
  title: 'atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputPlaceholder = Template.bind({});
InputPlaceholder.args = {
  placeholder: 'Search by name',
};
