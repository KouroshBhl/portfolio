import React from 'react';
import { styled } from 'styled-components';
import ContactMeButton from './ContactMeButton';
import { AiOutlineDownload } from 'react-icons/ai';

const HeroLeft = () => {
  return (
    <Wrapper>
      <h2>Kourosh Baharloo</h2>

      <h1>
        Hello, my name's Kourosh. <br /> I'm Front-End Developer
      </h1>

      <div className='hero__btn'>
        <ContactMeButton />

        <div className='download__CV'>
          <AiOutlineDownload />
          <a href='#'>Download CV</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HeroLeft;
