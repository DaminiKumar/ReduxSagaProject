import react, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../redux/actions/userById'
import Card from './CardComponent';

let dispatch;
let users;
const ViewByUserId = () => {

    dispatch = useDispatch();
    users = useSelector(state => state.users.users);
    //const loading = useSelector(state => state.users.loading);
    //const error = useSelector(state => state.users.error);
    console.log("UserList:", users);

    if (!Array.isArray(users)) {
        users = [];
        console.log("Set user to blank array");
    }

    return (
        <div className="userById px-5 mt-5">
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" id="id" placeholder="Enter id" class="form-control" className="input mb-5 mr-2"></input><br></br>
                <button type="submit" class="btn btn-light">Search</button>
            </form>
        </div>
    );
}


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