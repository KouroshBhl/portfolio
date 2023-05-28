import React from 'react';
import { styled } from 'styled-components';

const Container = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  margin: 0 auto;
  gap: 14.6rem;
`;

export default Container;
