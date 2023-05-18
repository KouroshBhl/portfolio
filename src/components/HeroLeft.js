import React from 'react';
import { styled } from 'styled-components';
import ContactMeButton from './ContactMeButton';
import { AiOutlineDownload } from 'react-icons/ai';

const HeroLeft = () => {
  return (
    <Wrapper>
      <h3>Kourosh Baharloo</h3>

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
