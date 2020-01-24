import producer from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const ACTIONS = {
    '@auth/SIGN_IN_REQUEST': draft => {
      draft.loading = true;
    },
    '@auth/SIGN_IN_SUCCESS': draft => {
      draft.token = action.payload.token;
      draft.signed = true;
      draft.loading = false;
    },
    '@auth/SIGN_FAILURE': draft => {
      draft.loading = false;
    },
  };

  return producer(state, draft => {
    return Object.keys(ACTIONS).indexOf(action.type) !== -1
      ? ACTIONS[action.type](draft)
      : state;
  });
}
