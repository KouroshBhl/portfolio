import React from 'react';
import { styled } from 'styled-components';

const Triangle = () => {
  return <Wrapper className='triangle'></Wrapper>;
};

const Wrapper = styled.div`
  clip-path: polygon(100% 0, 0 30%, 75% 100%);
  background-color: var(--main-theme-color);
  width: 9rem;
  height: 9rem;
  margin: 0 auto;
`;

export default Triangle;
