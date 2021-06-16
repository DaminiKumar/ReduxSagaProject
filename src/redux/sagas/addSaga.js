import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
function addUser(data) {

   return fetch(apiUrl, {
      userId: data.userId,
			title: data.title,
			body: data.body
   }).then(response => { console.log(response.data) })
      .catch((error) => { throw error })
}

function* fetchUsers({...data}) {
   try {
      const users = yield call(addUser, data);
      yield put({ type: 'ADD_USER_SUCCESS', users: users });
   } catch (e) {
      yield put({ type: 'ADD_USER_FAILED', message: e.message });
   }
}

function* userSaga() {
   yield takeEvery('ADD_USER_REQUESTED', fetchUsers);
}

export default userSaga;