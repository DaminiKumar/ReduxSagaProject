import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title" >UserId: {props.user.userId}</h4>
        <h5 className="card-subtitle mb-4">Title: {props.user.title}</h5>
        <h6 className="card-text">Body: {props.user.body}</h6>
      </div>
    </div>
  )
}

export default Card;