import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import addSaga from './addSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    addSaga(),
  ])
}