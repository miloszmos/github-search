import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.2rem;
  padding: 2rem;
  background-color: var(--black);
  color: var(--lightGray);
  a {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 242px;
  margin-left: 20px;
`;
