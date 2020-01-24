import producer from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  const ACTIONS = {
    '@auth/SIGN_IN_SUCCESS': () =>
      producer(state, draft => {
        draft.profile = action.payload.user;
      }),
  };

  return Object.keys(ACTIONS).indexOf(action.type) !== -1
    ? ACTIONS[action.type]()
    : state;
}
