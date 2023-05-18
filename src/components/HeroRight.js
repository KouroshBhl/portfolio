import React from 'react';
import { styled } from 'styled-components';
import PurpleCircle from './PurpleCircle';

const HeroRight = () => {
  return (
    <Wrapper>
      <div className='circle'>
        <PurpleCircle className='purple__circles first__circle' size='small' />
        <PurpleCircle
          className='purple__circles second__circle'
          size='medium'
        />
        <PurpleCircle className='purple__circles third__circle' size='medium' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .circle {
    position: relative;
    width: 58.8rem;
    height: 58.8rem;
    background-color: var(--circle-color);
    border-radius: 50%;
    margin-left: auto;
  }

  .purple__circles {
    position: absolute;
  }

  .first__circle {
    right: 20%;
    top: 10%;
  }
  .second__circle {
    top: 70%;
    right: 2%;
  }
  .third__circle {
    bottom: 50%;
    left: -15px;
  }
`;

export default HeroRight;
