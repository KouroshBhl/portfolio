import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

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

      <div>
        <button>Hire me</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #f0f0f0;
  height: 10rem;
  display: flex;
  font-size: 1.4rem;
`;

export default Menu;
