import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../redux/actions/userById';


let dispatch;
let users;
const ViewByUserId = () => {

    dispatch = useDispatch();
    users = useSelector(state => state.users.users);
    console.log("UserList:", users);

    return (
        <div className="userById px-5 mt-5">
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" id="id" placeholder="Enter id" class="form-control" className="input mb-5 mr-2"></input>
                <button type="submit" class="btn btn-light">Search</button>

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
            </form>
        </div>
    );
}

function renderTableData(users) {
    console.log("userList: ", users);
    //const { id, userId, title, body } = user
    const id = users.id;
    console.log("id: ", id);
    const userId = users.userId;
    console.log("userId: ", userId);
    const title = users.title;
    console.log("title: ", title);
    const body = users.body;
    console.log("body: ", body);
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
};


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const id = data.get('id');
    console.log(id);
    if (id === '') {
        alert("Id cannot be blank");
        return;
    }
    dispatch(getUserById(id));

}


export default ViewByUserId;