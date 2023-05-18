import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import { TbMessage2 } from 'react-icons/tb';

const Menu = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt='' />
      </div>

      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About me</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact me</a>
        </li>
      </ul>

      <div className='hire__container'>
        <a href='#' className='hire__btn'>
          Hire me
        </a>
        <TbMessage2 className='hire__icon' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  height: 10rem;
  font-size: 1.4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 11.6rem;
  text-transform: uppercase;
  background-color: var(--main-bg-color);

  ul {
    display: flex;
  }

  ul li {
    padding: 4rem;
  }

  ul li a {
    letter-spacing: 0.15rem;
    color: var(--main-font-color-dark);
  }

  .hire__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 12.4rem;
    height: 4rem;
    background-color: var(--main-theme-color);
    padding: 6px;
    border-radius: 50px;
  }

  .hire__btn {
    border: none;
    text-transform: uppercase;
    font-size: inherit;
    color: var(--main-font-color-light);
  }
  .hire__icon {
    color: var(--main-font-color-light);
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default Menu;
