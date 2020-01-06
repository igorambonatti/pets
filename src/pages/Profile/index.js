import React from 'react';
import Header from '../../components/Header/index';

import { Container, Content, View } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <View>
          <div>
            <img src="" alt="" />
          </div>
          <h1>
            <strong>Nome:</strong> BOB
          </h1>
          <h2>
            <strong>Biotipo:</strong> CACHORRO
          </h2>
          <h3>
            <strong>Descrição:</strong>
          </h3>
        </View>
      </Content>
    </Container>
  );
}
