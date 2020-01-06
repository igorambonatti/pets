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
            <strong>Nome:</strong> BOB O CÃO
          </h1>
          <h2>
            <strong>Biotipo:</strong> BUCICA
          </h2>
          <h3>
            <strong>Descrição:</strong> CAHORRO MUITOA VMANVASDJA
            LAKFSAFKALKLFKSLKF LAKSÇLFKLÇAKFAAAA CAHORRO MUITOA VMANVASDJA
            LAKFSAFKALKLFKSLKF LAKSÇLFKLÇAKFAAAA CAHORRO MUITOA VMANVASDJA
            LAKFSAFKALKLFKSLKF LAKSÇLFKLÇAKFAAAA
          </h3>
        </View>
      </Content>
    </Container>
  );
}
