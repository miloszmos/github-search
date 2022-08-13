import { SearchQuery } from '../graphql/generated/graphql';

export const getTotalResults = (data: SearchQuery): number => {
  return data.repositories.repositoryCount + data.users.userCount;
};
