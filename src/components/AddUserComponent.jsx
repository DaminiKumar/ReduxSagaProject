import React, { Component, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/add';
import axios from 'axios';

let dispatch;
let users;
let newdata;
let addedUser;

const AddUserComponent = () => {


	const [data, setData] = useState({
		userId: '',
		title: '',
		body: ''
	})
	dispatch = useDispatch();
	users = useSelector(state => state.users.users);
	console.log("UserList:", users);

	function handleSubmit(e) {
		e.preventDefault()
		//console.log("users::  ", new users("1", "title", "body"));
		//dispatch(addUser(data));

		axios.post(`https://jsonplaceholder.typicode.com/posts`, {
			userId: data.userId,
			title: data.title,
			body: data.body
		})
			.then(res => {
				addedUser=res.data
				console.log("Added User: ", addedUser)
			})
	}
	function handle(e) {

		newdata = { ...data }
		newdata[e.target.id] = e.target.value
		setData(newdata)
		console.log(newdata)
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="userId mt-5">
					<input
						type="text"
						placeholder="Enter User_Id"
						value={data.userId}
						id="userId"
						onChange={(e) => handle(e)}
					/>
				</div>
				<div className="title mt-2">
					<input
						type="text"
						placeholder="Enter Title"
						value={data.title}
						id="title"
						onChange={(e) => handle(e)}
					/>
				</div >
				<div className="body mt-2">
					<input
						type="text"
						placeholder="Enter Body"
						value={data.body}
						id="body"
						onChange={(e) => handle(e)}

					/>
				</div>
				<button type="submit" class="btn btn-success mt-5">Submit</button>
				{/* 
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
                        {renderTableData(addedUser)}
                    </tbody>
                </table>
				*/}
			</form>
		</div>
	)

}
/*
function renderTableData(addedUser) {
    console.log("New User: ", addedUser);
	
    const id = addedUser.id;
    console.log("id: ", id);
    const userId = addedUser.userId;
    console.log("userId: ", userId);
    const title = addedUser.title;
    console.log("title: ", title);
    const body = addedUser.body;
    console.log("body: ", body);
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
};*/




export default AddUserComponent