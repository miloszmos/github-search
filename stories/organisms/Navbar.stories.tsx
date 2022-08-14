import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '../../components/organisms/Navbar/Navbar';

export default {
  title: 'organisms/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const NavWithSearch: ComponentStory<typeof Navbar> = () => <Navbar />;
