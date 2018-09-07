import React from 'react';
import SolidStar from './SolidStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const ReviewComment = props => {
  let stars = [];
  for (var i = 0; i < 5; i++) {
    if (i <= props.user.rating - 1) {
      stars.push(<SolidStar key={i}/>)
    } else {
      stars.push(<EmptyStar key={i}/>)
    }
  }
  return (
    <div className="reviewComment">
      <div>Rating:{
        stars.map(star => {
          return star;
        })
      }</div>
      <div>Comment: {props.user.message}</div>
    </div>
  )
}

export default ReviewComment;