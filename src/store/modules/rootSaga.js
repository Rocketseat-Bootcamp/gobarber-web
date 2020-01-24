import { all } from 'redux-saga/effects';

import auth from '~/store/modules/auth/saga';
import user from '~/store/modules/user/saga';

export default function* rootSaga() {
  return yield all([auth, user]);
}
