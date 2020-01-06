/* eslint-disable no-console */
import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Info } from './styles';
import Header from '../../components/Header/index';

import igor from '../../assets/igor.jpg';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <ul>
          <Info>
            <div>
              <img src={igor} alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
          <Info>
            <div>
              <img src="" alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
          <Info>
            <div>
              <img src="" alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
          <Info>
            <div>
              <img src="" alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
          <Info>
            <div>
              <img src="" alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
          <Info>
            <div>
              <img src="" alt="" />
            </div>
            <h1>Type</h1>
            <h2>Nome</h2>
            <Link to="/profile">
              <h3>ver mais</h3>
            </Link>
          </Info>
        </ul>
      </Content>
    </Container>
  );
}
