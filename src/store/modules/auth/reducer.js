import producer from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const ACTIONS = {
    '@auth/SIGN_IN_SUCCESS': () =>
      producer(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      }),
  };

  return Object.keys(ACTIONS).indexOf(action.type) !== -1
    ? ACTIONS[action.type]()
    : state;
}
