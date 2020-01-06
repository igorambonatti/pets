import React from 'react';

import { Link } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { Container, Content, Badge } from './styles';

import petLogo from '../../assets/pet-logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={petLogo} alt="" />
          <Link to="/">goPets</Link>
        </nav>
        <aside>
          <Link to="register">
            <Badge>
              <IoIosAdd color="#000000" size={30} />
            </Badge>
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
