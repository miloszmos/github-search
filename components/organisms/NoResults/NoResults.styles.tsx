import styled from 'styled-components';

export const NoResultsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    width: 50%;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: var(--fw-semiBold);
    color: var(--black);
  }
  p {
    font-size: 1.6rem;
    font-weight: var(--fw-medium);
  }
`;
