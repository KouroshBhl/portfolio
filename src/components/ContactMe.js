import React from 'react';
import { styled } from 'styled-components';
import ContactMeButton from './ContactMeButton';
import PurpleCircle from './PurpleCircle';

const ContactMe = () => {
  return (
    <Wrapper>
      <div className='contactMe__container'>
        <h2>
          Interested working <br /> with me? Let's connect!
        </h2>
        <ContactMeButton />
      </div>
      <PurpleCircle
        className='contact__circle circle__Xsmall'
        size='2.5rem'
        color='var(--circle-color)'
      />
      <PurpleCircle
        className='contact__circle  circle__medium'
        size='4.1rem'
        color='var(--circle-color)'
      />
      <PurpleCircle
        className='contact__circle circle__small'
        size='3.9rem'
        color='var(--circle-color)'
      />
      <PurpleCircle
        className='contact__circle circle__big'
        size='7.3rem'
        color='var(--circle-color)'
      />
      <PurpleCircle
        className='contact__circle circle__Xbig'
        size='34.1rem'
        color='var(--circle-color)'
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80%;
  height: 47rem;
  margin: 0 auto;
  margin: 10rem auto;
  position: relative;
  overflow: hidden;

  .contactMe__container {
    background-color: var(--main-bg-color);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    h2 {
      text-align: center;
      line-height: 72px;
      color: var(--secondory-font-color);
      font-weight: 700;
      font-size: 5rem;
      z-index: 10;
    }
  }

  .contact__circle {
    position: absolute;
    top: 0;
  }

  .circle__Xsmall {
    left: 50%;
    top: 10%;
  }
  .circle__small {
    left: 44%;
    top: 47%;
  }
  .circle__medium {
    right: 20%;
    top: 10%;
  }
  .circle__big {
    left: 8%;
    top: 60%;
  }
  .circle__Xbig {
    top: 21rem;
    right: -2rem;
  }
`;

export default ContactMe;
