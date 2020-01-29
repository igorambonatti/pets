import React from 'react';
import Header from '../../components/Header/index';

import { Container, Content, ImgInput } from './styles';

export default function Register() {
  return (
    <Container>
      <Header />
      <Content>
        <form>
          <ImgInput>
            <label htmlFor="avatar">
              <img
                src="https://api.adorable.io/avatars/285/abott@adorable.png"
                alt=""
              />
              <input type="file" id="avatar" accept="image/*" />
            </label>
          </ImgInput>
          <input placeholder="Tipo" />
          <input placeholder="Nome" />
          <input placeholder="Descrição" />
        </form>
      </Content>
    </Container>
  );
}
