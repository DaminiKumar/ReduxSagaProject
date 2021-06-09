import { call, put, takeEvery } from 'redux-saga/effects'


function getApi(id) {
   console.log("Id in saga:", id);
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',

      }
   }).then(response => response.json())
   .catch((error) => { throw error })
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi, action.id);
      yield put({ type: 'GET_USERBYID_SUCCESS', users: users });
   } catch (e) {
      yield put({ type: 'GET_USERBYID_FAILED', message: e.message });
   }
}

function* userByIdSaga() {
   yield takeEvery('GET_USERBYID_REQUESTED', fetchUsers);
}

export default userByIdSaga;