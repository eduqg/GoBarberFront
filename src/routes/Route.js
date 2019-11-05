import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
// Novo componente que funcionara como <Route path="/" exact component={SignIn} isPrivate />
// Todas as outras variaveis vou colocar em ...rest
// Não preciso inicializar isPrivate = false porque defaultProps já inicializa a variável.
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // Variável que indica se o usuário está logado
  const signed = false;

  // Se o usuário não está logado e a rota é privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Usuário já logado, não precisa ver signIn nem signUp
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// isPrivate precisa ser um boolean
// O componente que recebo precisa ser uma função ou uma classe
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

// isPrivate não é obrigatória, por isso preciso de um valor padrão para ela.
RouteWrapper.defaultProps = {
  isPrivate: false,
};
