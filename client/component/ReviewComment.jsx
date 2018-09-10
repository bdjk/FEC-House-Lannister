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
  return (<div className="reviewComment">
    <div>Rating:{
        stars.map(star => {
          return star;
        })
      }</div>
    <div>Comment: {props.user.message}</div>
    <div>
      {
        props.user.recommends
          ? (<div>
            <svg className='checkMark' viewBox="0 0 11 5">
              <path d="M1.3 3.6L0 4.8 3.4 8 11 1.2 9.7 0 3.4 5.6"></path>
            </svg>
            <span>Recommends this product</span>
          </div>)
          : <div></div>
      }
    </div>
  </div>)
}

export default ReviewComment;
