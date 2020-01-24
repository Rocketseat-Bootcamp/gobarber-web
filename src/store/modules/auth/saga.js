import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSucess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const resp = yield call(api.post, 'session', {
    email,
    password,
  });

  const { token, user } = resp.data;

  if (!user.provider) {
    console.tron.error('Usuário não é um provedor');
    return;
  }

  yield put(signInSucess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
