import { takeEvery, put, call } from 'redux-saga/effects';

export const fetchUsers = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,
});