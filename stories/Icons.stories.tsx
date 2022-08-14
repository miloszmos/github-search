import React from 'react';
import { ComponentStory } from '@storybook/react';
import ArrowLeftIcon from '../components/atoms/Icons/ArrowLeftIcon';
import ArrowRightIcon from '../components/atoms/Icons/ArrowRightIcon';
import GithubIcon from '../components/atoms/Icons/GithubIcon';
import RepositoryIcon from '../components/atoms/Icons/RepositoryIcon';
import StarIcon from '../components/atoms/Icons/StarIcon';
import UsersIcon from '../components/atoms/Icons/UsersIcon';

export const IconArrowLeft: ComponentStory<typeof ArrowLeftIcon> = ({
  active,
}) => <ArrowLeftIcon active={active} />;
IconArrowLeft.args = {
  active: true,
};

export const IconArrowRight: ComponentStory<typeof ArrowRightIcon> = ({
  active,
}) => <ArrowRightIcon active={active} />;
IconArrowRight.args = {
  active: true,
};

export const IconGithub: ComponentStory<typeof GithubIcon> = () => (
  <GithubIcon />
);

export const IconRepository: ComponentStory<typeof RepositoryIcon> = () => (
  <GithubIcon />
);

export const IconStar: ComponentStory<typeof StarIcon> = () => <StarIcon />;

export const IconUser: ComponentStory<typeof UsersIcon> = () => <UsersIcon />;

export default {};
