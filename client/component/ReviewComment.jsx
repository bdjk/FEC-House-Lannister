import React from 'react';

const ReviewComment = props => {
  return (
    <div className="reviewComment">
      <div>Rating: {props.user.rating}</div>
      <div>Comment: {props.user.message}</div>
    </div>
  )
}

export default ReviewComment;