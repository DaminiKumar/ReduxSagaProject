import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
function addUser() {
  console.log(this.state)
  return fetch(apiUrl,{
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => {console.log(response.json())})
  .catch((error) => {throw error})
}

function* fetchUsers(action) {
   try {
      const users = yield call(addUser);
      yield put({type: 'ADD_USER_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'ADD_USER_FAILED', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('ADD_USER_REQUESTED', fetchUsers);
}

export default userSaga;