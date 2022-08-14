import casual from 'casual';

casual.seed(777);

const fakeUser = () => ({
  __typename: 'User',
  name: casual.name,
  avatarUrl: casual.url,
  bio: casual.description,
  id: casual.uuid,
  location: casual.address,
  login: casual.username,
});

const fakeRepository = () => ({
  __typename: 'Repository',
  id: casual.uuid,
  nameWithOwner: casual.full_name,
  createdAt: '2022-12-11T20:00:00.797Z',
  description: casual.description,
  stargazerCount: casual.random,
  url: casual.url,
  updatedAt: '2022-12-11T20:00:00.797Z',
  licenseInfo: {
    name: casual.name,
  },
  languages: [
    {
      nodes: {
        name: casual.name,
        color: casual.color_name,
      },
    },
  ],
});

export { fakeUser, fakeRepository };
