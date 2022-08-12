import React from 'react';
import NoResultsIcon from '../../atoms/icons/NoResultsIcon';
import { NoResultsStyles } from './NoResults.styles';

const NoResults = () => {
  return (
    <NoResultsStyles>
      <div className="icon">
        <a
          aria-label="resource policy"
          aria-disabled
          href="https://storyset.com/web"
        ></a>
        <NoResultsIcon />
      </div>
      <h1>Ups!... no results found</h1>
      <p>Please try another search</p>
    </NoResultsStyles>
  );
};

export default NoResults;
