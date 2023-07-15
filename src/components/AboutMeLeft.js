import React from 'react';
import { styled } from 'styled-components';
import data from '../assets/data.json';
import ContactMeButton from './ContactMeButton';

const AboutMeLeft = () => {
  return (
    <Wrapper>
      <h3>About me</h3>
      <CustomH2>{data.aboutme.title}</CustomH2>

      <p className='desc_paragraph'>{data.aboutme.description}</p>

      <ContactMeButton />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-left: 6.2rem;

  .desc_paragraph {
    margin-bottom: 1.8rem;
  }
`;

const CustomH2 = styled.h2`
  font-weight: 700;
  font-size: 6rem;
  line-height: 78px;
  color: var(--secondory-font-color);
`;

export default AboutMeLeft;
