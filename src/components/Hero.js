import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import { styled } from 'styled-components';
import Triangle from './Triangle';
import Container from './Container';

const Hero = () => {
  return (
    <Wrapper>
      <Container className='hero__container'>
        <HeroLeft />
        <HeroRight />
      </Container>
      <Triangle pick={'purple'} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg-color);
  padding-bottom: 4.5rem;

  .hero__container {
    max-width: 90%;
  }
`;

export default Hero;
