import { User, Repository, SearchQuery } from '../graphql/generated/graphql';

type ResponseDataType = (Repository | User | null)[];

export const getDataReady = (data: SearchQuery): ResponseDataType => {
  const repoNodes = data.repositories.nodes ?? [];
  const userNodes = data.users.nodes ?? [];

  const prepData = [...repoNodes, ...userNodes].filter(Boolean) as (
    | Repository
    | User
  )[];

  prepData.filter(
    // ? Check for User | Repository because I had some other types in response
    (el) => el.__typename && el.__typename.match(/^(User|Repository)$/)
  );

  // ? Check this types later
  // @ts-ignore
  return repoNodes;
};
