import React from 'react';
import { styled } from 'styled-components';
import AboutMeLeft from './AboutMeLeft';
import AboutMeRight from './AboutMeRight';
import Container from './Container';
import Triangle from './Triangle';

const AboutMe = () => {
  return (
    <Wrapper>
      <Triangle pick={'gray'} className='custom__triangle' />
      <Container>
        <AboutMeLeft />
        <AboutMeRight />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg-color);
  padding-bottom: 9.3rem;
  position: relative;

  .custom__triangle {
    transform: translateY(130%);
  }
`;

export default AboutMe;
