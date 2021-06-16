import React from 'react';
import { useDispatch } from 'react-redux';


let dispatch;
const Card = (props) => {
  dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title" >User Id: {props.user.userId}</h3>
        <h5 className="card-subtitle mb-4">Title: {props.user.title}</h5>
        <h6 className="card-text">Body: {props.user.body}</h6>
      </div>
    </div>
  )
}


export default Card;