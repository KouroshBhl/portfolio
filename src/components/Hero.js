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

      <div className='triangle'></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg-color);
  padding-bottom: 4.5rem;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 11.6rem;
    gap: 14.6rem;
  }

  .triangle {
    clip-path: polygon(50% 0%, 100% 50%, 30% 100%);
    background-color: var(--main-theme-color);
    width: 9rem;
    height: 9rem;
    margin: 0 auto;
    border-radius: 13px;
  }
`;

export default Hero;
