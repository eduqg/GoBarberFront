import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

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
    return <Redirect to="/" />
  }

  // Usuário já logado, não precisa ver signIn nem signUp
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...rest} component={Component} />;
}

// isPrivate precisa ser um boolean
// O componente que recebo precisa ser uma função ou uma classe
RouteWrapper.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

// isPrivate não é obrigatória, por isso preciso de um valor padrão para ela.
RouteWrapper.defaultProps = {
  isPrivate: false,
};
