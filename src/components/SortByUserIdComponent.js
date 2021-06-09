import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortUsers } from '../redux/actions/sortUsers';


const SortByUserId = () => {
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


  const [sortType, setSortType] = useState('asc');
  users.sort((a, b) => {

    const isReversed = (sortType === 'asc') ? a.userId -b.userId : b.userId -a.userId;
    return isReversed;
  })

  return (
    <div className="User px-5">
      <button className="button mr-5 mt-4 mb-5" onClick={() => setSortType('asc')}>Sort By Body in Ascending</button>
      <button className="button mt-4 mb-5" onClick={() => setSortType('desc')}>Sort By Body in Descending </button>

      <table border="2" class="table table-striped">
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
    const { id, userId, title, body } = user
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

export default SortByUserId;