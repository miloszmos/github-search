import { getTotalResults } from '../lib/getTotalResults';

const mockedData = {
  repositories: {
    repositoryCount: 3929,
  },
  users: {
    userCount: 2928283,
  },
};

describe('calculate total results count', () => {
  it('properly sum the amount of users and repositories results', () => {
    expect(getTotalResults(mockedData)).toBe(2932212);
  });
});
