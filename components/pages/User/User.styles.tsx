import styled from 'styled-components';

export const UserProfileStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  h1,
  p {
    font-weight: var(--fw-semiBold);
    line-height: 3.2rem;
  }
  h1 {
    margin-top: 1.6rem;
    color: var(--darkestGray);
    font-size: 2.6rem;
  }
  p {
    color: var(--darkGray);
    font-size: 2rem;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  margin-top: 1.3rem;
  & > div:nth-child(2) {
    margin: 0 20px;
  }
`;
