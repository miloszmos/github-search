import { formatDistanceStrict } from 'date-fns';
import React from 'react';
import { Repository } from '../../../graphql/generated/graphql';
import RepositoryIcon from '../../atoms/Icons/RepositoryIcon';
import { LabelStyles } from '../../atoms/Label/Label.styles';
import StarIcon from '../../atoms/Icons/StarIcon';
import Dot from '../../atoms/Label/DotLabel';
import {
  InfoStyles,
  ItemTextStyles,
  ItemWrapperStyles,
  LabelWrapper,
} from './ListItem.styles';
import DetailsLabel from '../DetailsLabel/DetailsLabel';

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const {
    nameWithOwner,
    url,
    description,
    stargazerCount,
    licenseInfo,
    updatedAt,
    languages,
  } = repository;
  const lang = languages?.nodes;

  return (
    <ItemWrapperStyles>
      <div>
        <RepositoryIcon />
      </div>
      <div className="right">
        <a href={url} target="_blank" rel="noreferrer">
          <ItemTextStyles>{nameWithOwner}</ItemTextStyles>
        </a>
        <ItemTextStyles className="gray desc">{description}</ItemTextStyles>
        <InfoStyles>
          <LabelWrapper>
            <DetailsLabel icon={<StarIcon />} count={stargazerCount} />
          </LabelWrapper>
          {lang && lang[0] && (
            <LabelWrapper data-testid="language">
              <Dot label={lang[0].name} bgColor={lang[0].color} />
            </LabelWrapper>
          )}
          {licenseInfo && <LabelWrapper>{licenseInfo.name}</LabelWrapper>}
          <LabelStyles data-testid="updatedAt">
            Updated{' '}
            {formatDistanceStrict(new Date(updatedAt), new Date(), {
              addSuffix: true,
            })}
          </LabelStyles>
        </InfoStyles>
      </div>
    </ItemWrapperStyles>
  );
};

export default RepositoryItem;
