import produce from 'immer';

const INITIAL_STATE = {
  toke: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    // No reducer de autenticação é armazena apenas o token e a informação se está logado ou não
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
