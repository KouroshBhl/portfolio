import React from 'react';
import { styled } from 'styled-components';

const Triangle = ({ pick, className }) => {
  return (
    <Wrapper
      className={`${className}`}
      style={{ backgroundColor: pick === 'purple' ? '#5e3bee' : '#f1f0fb' }}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  clip-path: polygon(100% 0, 0 30%, 75% 100%);
  /* background-color: var(--main-theme-color); */
  width: 9rem;
  height: 9rem;
  margin: 0 auto;
`;

export default Triangle;
