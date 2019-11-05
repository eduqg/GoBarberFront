import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import bigode from '~/assets/bigode.svg';

import Notifications from '~/components/Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      {/* Content para alinhar ao centro */}
      <Content>
        <nav>
          <img src={bigode} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Eduardo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
