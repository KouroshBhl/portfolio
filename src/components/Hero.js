import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import { styled } from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <div className='container'>
        <HeroLeft />
        <HeroRight />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg-color);

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 11.6rem;
  }
`;

export default Hero;
