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
          <AiOutlineDownload className='download__icon' />
          <a href='#'>Download CV</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  h2 {
    font-size: 1.6rem;
    color: var(--main-theme-color);
    text-transform: uppercase;
    line-height: 2.6;
    font-weight: 500;
  }

  h1 {
    font-size: 6rem;
    line-height: 7.6rem;
    color: var(--secondory-font-color);
    font-weight: 700;
  }

  .hero__btn {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .download__CV {
    display: flex;
    align-items: center;
  }

  .download__CV a {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--secondory-font-color);
  }

  .download__icon {
    width: 2rem;
    height: 2rem;
  }
`;

export default HeroLeft;
