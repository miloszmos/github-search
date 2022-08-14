import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NoResults from '../../components/organisms/NoResults/NoResults';

export default {
  title: 'organisms/NoResults',
  component: NoResults,
} as ComponentMeta<typeof NoResults>;

export const NoResultsFound: ComponentStory<typeof NoResults> = () => (
  <NoResults />
);
