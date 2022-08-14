import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeUser } from '../lib/testUtils';
import UserItem from '../components/molecules/ListItem/UserItem';

const item = fakeUser();

describe('<UserItem />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <UserItem user={item} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders out base information', async () => {
    const { container } = render(
      <MockedProvider>
        <UserItem user={item} />
      </MockedProvider>
    );
    const nameWithOwner = screen.getByText(item.name);
    expect(nameWithOwner).toBeInTheDocument();
    const img = screen.getByAltText('some nice faces');
    expect(img).toBeInTheDocument();
  });
});
