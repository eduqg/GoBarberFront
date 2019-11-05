import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import bigode from '~/assets/bigode.svg';

export default function Header() {
  return (
    <Container>
      {/* Content para alinhar ao centro */}
      <Content>
        <nav>
          <img src={bigode} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Eduardo Quintino</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Eduardo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
