import React from 'react';
import { styled } from 'styled-components';

const Card = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 37.6rem;
  height: 28.6rem;
  background-color: var(--main-bg-color-white);
  box-shadow: 37px 37px 80px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 5.2rem 3.4rem;
`;

export default Card;
