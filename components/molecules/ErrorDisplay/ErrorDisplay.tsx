import React from 'react';
import { ApolloError } from '@apollo/client';
import { ErrorDisplayStyles } from './ErrorDisplay.styles';

interface DisplayErrorProps {
  error?: ApolloError;
}

const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;
  if (error.clientErrors.length) {
    return (
      <ErrorDisplayStyles>
        <p className="title">
          <strong>Whoops!</strong>
        </p>
        {error.clientErrors.map((error, i) => (
          <div key={i}>
            <p className="message">{error.message}</p>
          </div>
        ))}
      </ErrorDisplayStyles>
    );
  }

  return (
    <ErrorDisplayStyles>
      <p className="title">
        <strong>Whoops!</strong>
      </p>
      <p className="message">{error.message}</p>
    </ErrorDisplayStyles>
  );
};

export default DisplayError;
