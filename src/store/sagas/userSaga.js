import { call, put, takeLeading } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUsers() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    );
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILURE', error });
  }
}

function* userSaga() {
  yield takeLeading('FETCH_USERS_SUCCESS', fetchUsers);
}

export default userSaga;