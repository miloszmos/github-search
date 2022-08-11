import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return <InnerStyles>{children}</InnerStyles>;
};

export default Layout;
