import React from 'react';
import { styled } from 'styled-components';
import Developer from '../assets/Developer.svg';
import linesaboutme from '../assets/linesabotme.png';

const AboutMeRight = () => {
  return (
    <Wrapper>
      <img src={Developer} alt='developer' className='developer__img' />
      <img src={linesaboutme} alt='lines' className='developer__lines' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .developer__img {
    width: 100%;
    height: 50.4rem;
  }

  .developer__lines {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default AboutMeRight;
