import react, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserById} from '../redux/actions/userById'
import Card from './CardComponent';

let dispatch;
const  ViewByUserId = () => {

    dispatch = useDispatch();
        
    return(
            <div className="userById">
                <form onSubmit={handleSubmit}>
                    <input type="text" name ="id" id="id" placeholder="Enter id" className="input mb-5 mr-2"></input>
                    <button type="submit">Search By Id</button> 
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