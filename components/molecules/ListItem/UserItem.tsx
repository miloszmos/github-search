import Link from 'next/link';
import React from 'react';
import { User } from '../../../graphql/generated/graphql';
import Avatar from '../../atoms/Avatar/Avatar';
import { LabelStyles } from '../../atoms/Label/Label.styles';
import {
  ItemDescriptionStyles,
  ItemTextStyles,
  ItemWrapperStyles,
} from './ListItem.styles';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { avatarUrl, name, login, location, bio } = user;
  return (
    <ItemWrapperStyles>
      <div>
        <Avatar src={avatarUrl} alt="some nice faces" />
      </div>
      <div className="right">
        {name && (
          <Link href={`/user/${login}`}>
            <a>
              <ItemTextStyles className="mb">{name}</ItemTextStyles>
            </a>
          </Link>
        )}
        <ItemTextStyles className="gray">{login}</ItemTextStyles>
        <ItemDescriptionStyles>{bio}</ItemDescriptionStyles>
        <LabelStyles>{location}</LabelStyles>
      </div>
    </ItemWrapperStyles>
  );
};

export default UserItem;
