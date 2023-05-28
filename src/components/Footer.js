import React from 'react';
import { styled } from 'styled-components';
import Container from './Container';
import data from '../assets/data.json';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer__container'>
        <Container className='footer__container--component'>
          <article>
            <h2 className='heading__footer'>{data.footer.title}</h2>
            <p className='footer__paragraph'>{data.footer.paragraph}</p>
          </article>
          <address className='footer__contact'>
            <div className='footer__contact--info'>
              <HiOutlineMail />
              <a href='mailto:kourosh9bhl@gmail.com'>kourosh9bhl@gmail.com</a>
            </div>
            <div className='footer__contact--info'>
              <AiOutlinePhone />
              <a href='tel:+989356664280'>+989356664280</a>
            </div>
            <div className='footer__contact--info'>
              <BsInstagram className='footer__social' />
              <FaLinkedinIn className='footer__social' />
              <FaDiscord className='footer__social' />
            </div>
          </address>
        </Container>

        <section className='footer__copyright'>
          <ul className='footer__menu'>
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

          <p>All right reserved</p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--secondory-font-color);
  /* height: 48.9rem; */
  width: 90%;
  margin: 0 auto;
  border-radius: 2.4rem 2.4rem 0 0;
  color: var(--main-bg-color-white);

  .footer__container {
    width: 70%;
    margin: 11rem auto 6.6rem auto;
  }

  .footer__container--component {
    justify-items: end;
    margin: 0;
    border-bottom: 1px solid #404040;
    margin-bottom: 5.2rem;
    padding-bottom: 7rem;
  }
  .heading__footer {
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }
  .footer__paragraph {
    color: var(--main-bg-color-white);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3.2rem;
    max-width: 70%;
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    color: var(--main-bg-color-white);
    font-size: 1.6rem;
    font-weight: 500;
    gap: 2.4rem;
  }
  .footer__contact svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  .footer__social svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  .footer__contact--info {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .footer__contact--info a {
    color: var(--main-bg-color-white);
  }

  .footer__copyright {
    display: flex;
    justify-content: space-between;
  }
`;

export default Footer;
