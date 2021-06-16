import React, { Component , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/add';
import axios from 'axios';

let dispatch;
let users;

const AddUserComponent = () => {


	const [data, setData] = useState({
		userId: '',
		title: '',
		body: ''
	})
	dispatch = useDispatch();
	users = useSelector(state => state.users.users);
    console.log("UserList:", users);

	function handleSubmit  (e) {
		e.preventDefault()
		//console.log("users::  ", new users("1", "title", "body"));
		//dispatch(addUser(data));

		axios.post(`https://jsonplaceholder.typicode.com/posts`,{
			userId: data.userId,
			title: data.title,
			body: data.body
		})
		.then(res=>{
			console.log(res.data)
		})		
	}
	function handle(e){

		const newdata = {...data}
		newdata[e.target.id]= e.target.value
		setData(newdata)
		console.log(newdata)
	}

	return (
		<div>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div>
					<input
						type="text"
						value={data.userId}
						id="userId"
						onChange={(e)=>handle(e)}
					/>
				</div>
				<div>
					<input
						type="text"
						value={data.title}
						id="title"
						onChange={(e)=>handle(e)}
					/>
				</div>
				<div>
					<input
						type="text"
						value={data.body}
						id="body"
						onChange={(e)=>handle(e)}

					/>
				</div>
				<button type="submit" className="button mb-5">Submit</button>
			</form>
		</div>
	)

}

export default AddUserComponent