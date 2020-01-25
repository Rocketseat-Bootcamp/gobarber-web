import producer from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  const ACTIONS = {
    '@auth/SIGN_IN_SUCCESS': draft => {
      draft.profile = action.payload.user;
    },
    '@user/UPDATE_PROFILE_SUCCESS': draft => {
      draft.profile = action.payload.data;
    },
    '@auth/SIGN_OUT': draft => {
      draft.profile = null;
    },
  };

  return producer(state, draft => {
    return Object.keys(ACTIONS).indexOf(action.type) !== -1
      ? ACTIONS[action.type](draft)
      : state;
  });
}
