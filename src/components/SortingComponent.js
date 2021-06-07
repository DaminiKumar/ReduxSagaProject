import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortUsers } from '../redux/actions/sortUsers';
import Card from './CardComponent';

const SortUsers= () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  console.log("SortingUsers: ", users);
  React.useEffect(() => {
    Users()
}, []);

const Users = () => {
    dispatch(sortUsers())
}
console.log("userList: ", users);
if (!Array.isArray(users)) {
    users = [];
    console.log("Set users to blank array");
}


  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  return (
    <div>

<table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >User_Id</th>
                        <th>Title</th>
                        <th>Body</th>
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
      const { id, userId, title , body } = user
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{userId}</td>
              <td>{title}</td>
              <td>{body}</td>
          </tr>
      )
  })
};

export default SortUsers;