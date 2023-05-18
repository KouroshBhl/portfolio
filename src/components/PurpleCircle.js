import React from 'react';
import { styled } from 'styled-components';

const PurpleCircle = ({ className, size }) => {
  let recSize = 0;

  switch (size) {
    case 'small':
      recSize = '1.7rem';
      break;

    case 'medium':
      recSize = '3.3rem';
      break;

    case 'big':
      recSize = '6.4rem';
      break;

    default:
      recSize = 0;
      break;
  }

  return (
    <Wrapper
      className={className}
      style={{ width: recSize, height: recSize }}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-theme-color);
  border-radius: 50%;
  display: inline-block;
`;

export default PurpleCircle;
