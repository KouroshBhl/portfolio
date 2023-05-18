import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';
import { VscTools } from 'react-icons/vsc';
import { TbLanguage } from 'react-icons/tb';
import { GiTechnoHeart } from 'react-icons/gi';

const Skills = () => {
  return (
    <Wrapper>
      <h3>my skills</h3>

      <h2>Yes, I try hard!</h2>

      <p>
        I always love learning new technology, framework, tools etc.
        <br /> For now I am learning TypeScript and practicing Algorithms.
      </p>

      <div className='card__container'>
        <Card className='card__content'>
          <div className='icon__holder'>
            <TbLanguage />
          </div>

          <h4>Programming languages</h4>

          <ul>
            <li>
              <span className='hashtag'>#</span>JavaScript
            </li>
          </ul>
        </Card>
        <Card className='card__content'>
          <div className='icon__holder'>
            <GiTechnoHeart />
          </div>

          <h4>Technologies / Frameworks</h4>

          <ul>
            <li>
              <span className='hashtag'>#</span>React
            </li>
            <li>
              <span className='hashtag'>#</span>Styled Componenets
            </li>
            <li>
              <span className='hashtag'>#</span>Tailwind
            </li>
          </ul>
        </Card>

        <Card className='card__content'>
          <div className='icon__holder'>
            <VscTools />
          </div>

          <h4>Tools</h4>

          <ul>
            <li>
              <span className='hashtag'>#</span> VS code
            </li>
            <li>
              <span className='hashtag'>#</span>Git
            </li>
          </ul>
        </Card>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 11.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  .card__container {
    display: flex;
    gap: 4rem;
    margin: 5rem 0;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.7rem;
  }

  .card__content svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--main-theme-color);
    position: relative;
    z-index: 10;
  }
  .icon__holder {
    position: relative;
  }

  .icon__holder::after {
    content: '';
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    background-color: var(--circle-color);
    position: absolute;
    left: -8px;
    bottom: -8px;
  }

  .hashtag {
    color: var(--main-theme-color);
    font-weight: 600;
  }

  li {
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    border: 1.5px solid var(--light-gray);
    border-radius: 7px;
    padding: 0.3rem 0.7rem;
    display: inline-block;
    margin: 0.4rem;
  }
`;

export default Skills;
