import { getDataReady } from '../lib/getDataReady';
import { fakeRepository, fakeUser } from '../lib/testUtils';

const mockedData = {
  repositories: {
    nodes: Array(10)
      .fill(null)
      .map(() => fakeRepository()),
  },
  users: {
    nodes: Array(10)
      .fill(null)
      .map(() => fakeUser()),
  },
};

describe('merge search query results', () => {
  it('properly combines users with repositories', () => {
    expect(getDataReady(mockedData)).toHaveLength(20);
  });
  it('properly sort data', () => {
    expect(
      getDataReady(mockedData).every((a, b) => a.id.localeCompare(b.id))
    ).toBe(true);
  });
});
