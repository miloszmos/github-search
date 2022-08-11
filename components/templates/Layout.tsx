import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Navbar from '../organisms/Navbar/Navbar';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
};

export default Layout;
