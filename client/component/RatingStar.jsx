import React from 'react';
import SolidStar from './SolidStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const RatingStar = props => {
  let stars = [];
  for (var i = 0; i < 5; i++) {
    if (i <= 3 - 1) {
      stars.push(<SolidStar key={i}/>)
    } else {
      stars.push(<EmptyStar key={i}/>)
    }
  }

  return (<div className="reviewComment">
    <div>{
        stars.map(star => {
          return star;
        })
      }</div>
    <div>
      3/5 stars
    </div>
  </div>)
}

export default RatingStar;
