import { gql } from '@apollo/client';

export const GET_USER_PROFILE_QUERY = gql`
  query getUserProfile($login: String!) {
    user(login: $login) {
      avatarUrl
      id
      name
      starredRepositories {
        totalCount
      }
      following {
        totalCount
      }
      followers {
        totalCount
      }
      login
    }
  }
`;
