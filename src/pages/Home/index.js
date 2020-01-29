/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Info, Content } from './styles';
import Header from '../../components/Header/index';

import api from '../../services/api';

export default function Home() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    async function loadPets() {
      const response = await api.get('pets');

      setPets(response.data);
    }
    loadPets();
  }, []);
  return (
    <Content>
      <Header />
      <Container>
        <ul>
          {pets.map(pet => (
            <Info key={pet.id}>
              <div>
                <img src={pet.image} alt="" />
              </div>
              <h1>{pet.type}</h1>
              <h2>{pet.name}</h2>
              <Link to="/profile">
                <h3>ver mais</h3>
              </Link>
            </Info>
          ))}
        </ul>
      </Container>
      <button type="submit">Ver mais</button>
    </Content>
  );
}
