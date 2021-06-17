import React, { useEffect, useState , useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortUsers } from '../redux/actions/sortUsers';
import Paginations from "./Pagination";

let currentData;
const SortById = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  console.log("SortingUsers: ", users);

  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = users.length;
  let LIMIT = 5;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  currentData = users.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );



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

    const isReversed = (sortType === 'asc') ? a.id -b.id : b.id -a.id;
    return isReversed;
  })

  return (
    <div className="User px-5">
      <button className="button mr-5 mt-4 mb-5" onClick={() => setSortType('asc')}>Sort By Id in Ascending</button>
      <button className="button mt-4 mb-5" onClick={() => setSortType('desc')}>Sort By Id in Descending </button>

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
      <div className="pagination-wrapper">
          <Paginations
            totalRecords={NUM_OF_RECORDS}
            pageLimit={LIMIT}
            pageNeighbours={2}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
          </div>
    </div>

  )
}

function renderTableData(users) {
  console.log("userList: ", users);
  return currentData.map((user, index) => {
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

export default SortById;