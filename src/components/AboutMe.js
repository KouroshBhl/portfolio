import React from 'react';
import { styled } from 'styled-components';
import AboutMeLeft from './AboutMeLeft';
import AboutMeRight from './AboutMeRight';
import Container from './Container';

const AboutMe = () => {
  return (
    <Wrapper>
      <Container>
        <AboutMeLeft />
        <AboutMeRight />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg-color);
  padding: 9.3rem 0;
`;

export default AboutMe;
