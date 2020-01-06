import React from 'react';
import Header from '../../components/Header/index';

import { Container, Content } from './styles';

export default function Register() {
  return (
    <Container>
      <Header />
      <Content>
        <form>
          <input type="file" />
          <input placeholder="Tipo" />
          <input placeholder="Nome" />
          <input placeholder="Descrição" />
        </form>
      </Content>
    </Container>
  );
}
