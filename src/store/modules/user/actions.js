export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(data) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { data },
  };
}

export function updateProfileFailure(data) {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
