import React, { Component } from 'react'
import { useDispatch } from 'react-redux';
import {addUser} from '../redux/actions/add';

let dispatch;
const AddUserComponent = () => {
    
	/*constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}*/

    dispatch = useDispatch();

	/*submitHandler = (e) => {
		e.preventDefault()
        const data = new FormData(event.target);
        console.log("in handle submit data:", data);
        const userId = data.get('userId');
        const title = data.get('title');
        const body = data.get('body');
        const userObj = new user(userId, title, body);
		dispatch(addUser(userObj));
		
			
	}*/

		return (
			<div>
				<form>
					<div>
						<input
							type="text"
							name="userId"
							id="userId"
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							id="title"
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							id="body"

						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
    ) 
	
}

export default AddUserComponent