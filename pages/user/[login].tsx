import { GetServerSideProps } from 'next';
import Avatar from '../../components/atoms/Avatar/Avatar';
import StarIcon from '../../components/atoms/Icons/StarIcon';
import DetailsLabel from '../../components/molecules/DetailsLabel/DetailsLabel';
import {
  UserDetails,
  UserProfileStyles,
} from '../../components/pages/User/User.styles';
import { GetUserProfileQuery } from '../../graphql/generated/graphql';
import { GET_USER_PROFILE_QUERY } from '../../graphql/getUserProfileQuery';
import { client } from '../../lib/apolloClient';

type UserProfile = GetUserProfileQuery['user'] & {
  avatarUrl: string;
};

interface UserProfilePageProps {
  user: UserProfile;
}

const UserProfilePage = ({ user }: UserProfilePageProps) => {
  return (
    <UserProfileStyles>
      <Avatar size="large" src={user.avatarUrl} alt="User Profile Avatar" />
      {user.name && <h1>{user.name}</h1>}
      <p>{user.login}</p>
      <UserDetails>
        <DetailsLabel
          label="Followers"
          icon={<StarIcon className="icon" />}
          count={user.starredRepositories.totalCount}
        />
        <DetailsLabel
          label="Following"
          count={user.starredRepositories.totalCount}
        />

        <DetailsLabel
          icon={<StarIcon className="icon" />}
          count={user.starredRepositories.totalCount}
        />
      </UserDetails>
    </UserProfileStyles>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const params = context;
    const login = params.query.login;
    const { data, error } = await client.query({
      query: GET_USER_PROFILE_QUERY,
      variables: { login },
    });
    if (error || !data) {
      return { notFound: true };
    }
    return {
      props: {
        user: data.user,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default UserProfilePage;
