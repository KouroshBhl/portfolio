import React from 'react';
import { styled } from 'styled-components';
import Container from './Container';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <article>
          <h2>portfolio</h2>
          <p></p>
        </article>
        <div></div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--secondory-font-color);
  height: 48.9rem;
  width: 90%;
  margin: 0 auto;
  border-radius: 2.4rem 2.4rem 0 0;
`;

export default Footer;
