import React from 'react';
import { styled } from 'styled-components';
import { TbMessage2 } from 'react-icons/tb';

const ContactMeButton = () => {
  return (
    <Wrapper>
      <div className='button_wrapper'>
        <TbMessage2 className='contact__icon' />
        <a href='#'>Contact me</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: var(--main-theme-color);
  width: 20rem;
  height: 7rem;
  border: none;
  color: var(--main-font-color-light);
  border-radius: 50px;
  display: inline-block;
  z-index: 10;

  .button_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0;
  }

  .button_wrapper a {
    color: inherit;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .contact__icon {
    width: 2rem;
    height: 2rem;
  }
`;

export default ContactMeButton;
