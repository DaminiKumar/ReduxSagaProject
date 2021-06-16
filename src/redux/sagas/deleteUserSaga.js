import { call, put, takeEvery } from 'redux-saga/effects'

function getApi(id) {
   console.log("id deleted: ", id);
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',

      }
   }).then((data)=>{
      data.json().then((res)=>{
         console.log("resp", res)
      })
   })
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi, action.id);
      yield put({ type: 'DELETE_USERBYID_SUCCESS', users: users });
   } catch (e) {
      yield put({ type: 'DELETE_USERBYID_FAILED', message: e.message });
   }
}

function* deleteUserSaga() {
   yield takeEvery('DELETE_USERBYID_REQUESTED', fetchUsers);
}

export default deleteUserSaga;