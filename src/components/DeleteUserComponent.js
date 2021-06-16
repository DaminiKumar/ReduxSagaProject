import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import { deleteUser } from '../redux/actions/deleteUser';

let dispatch;
const DeleteUser = () => {
  dispatch = useDispatch();
  let users = useSelector(state => state.users.users);
  console.log("users: ", users);

  React.useEffect(() => {
    Users()
  }, []);

  const Users = () => {
    dispatch(getUsers())
  }
  console.log("userList: ", users);
  if (!Array.isArray(users)) {
    users = [];
    console.log("Set users to blank array");
  }

  return (
    <div className="User px-5">
      <table border="2" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th >User_Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTableData(users)}
        </tbody>
      </table>
    </div>

  )
}

function renderTableData(users) {
  console.log("userList: ", users);
  return users.map((user, index) => {
    //destructuring
    const { id, userId, title, body } = user
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          &nbsp;&nbsp;&nbsp;

          <button className="btn btn-danger shadow-none" onClick={(e) => deleteUserById(e, id)}><span className="glyphicon glyphicon-trash" aria-hidden="true" title="Delete User">Delete</span></button>

        </td>
      </tr>
    )
  })
};

function deleteUserById(event, id) {
  event.preventDefault();
  console.log("id", id);
  dispatch(deleteUser(id));
  alert("User deleted successfully");
}

export default DeleteUser;