import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonItemLoading } from '../../components/molecules/ListItem/SkeletonItemLoading/SkeletonItemLoading';

export default {
  title: 'molecules/SkeletonLoading',
  component: SkeletonItemLoading,
} as ComponentMeta<typeof SkeletonItemLoading>;

export const SkeletonGithubLoading: ComponentStory<typeof SkeletonItemLoading> =
  () => <SkeletonItemLoading />;
