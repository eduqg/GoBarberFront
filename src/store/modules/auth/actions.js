// Faz a requisição ao servidor para criar sessão. Ação do Saga.
export function singInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

// Caso usuário iniciou sessão com sucesso
// Servidor retorna o token de sessão e o usuário e salva na store. Ação do Reducer.
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

// Caso criar sessão tenha falhado. Tanto para signIn quanto para signUp.
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
