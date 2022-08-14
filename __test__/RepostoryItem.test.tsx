import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeRepository } from '../lib/testUtils';
import RepositoryItem from '../components/molecules/ListItem/RepositoryItem';

const item = fakeRepository();

describe('<RepositoryItem />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <RepositoryItem repository={item} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders out base information', async () => {
    const { container } = render(
      <MockedProvider>
        <RepositoryItem repository={item} />
      </MockedProvider>
    );
    const nameWithOwner = screen.getByText(item.nameWithOwner);
    expect(nameWithOwner).toBeInTheDocument();
    await screen.findByTestId('updatedAt');

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', 'http://www.Lilly.info/');
    expect(link).toHaveTextContent('Marisa Ward');
  });
});
