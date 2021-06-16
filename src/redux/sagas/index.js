import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import addSaga from './addSaga'
import userByIdSaga from './userByIdSaga'
import sortUsersSaga from './sortUsersSaga'
import deleteUserSaga from './deleteUserSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    addSaga(),
    userByIdSaga(),
    sortUsersSaga(),
    deleteUserSaga(),
  ])
}