import { call, put, takeEvery } from 'redux-saga/effects'
import {deleteUser} from '../actions/deleteUser'

function deleteApi(id) {
   console.log("id deleted: ", id);
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',

      }
   }).then((data)=>{
      data.json().then((res)=>{
         console.warn("resp", res)
      })
   })
}

function* fetchUsers(action) {
   try {
      const users = yield call(deleteApi, action.id);
      yield put(deleteUser(action.id));
   } catch (e) {
   
   }
}

function* deleteUserSaga() {
   yield takeEvery('DELETE_USERBYID_SUCCESS', fetchUsers);
}

export default deleteUserSaga;