import React from 'react';
import Review from './Review.jsx'
import Rating from './Rating.jsx'

const App = props => {
  return (<div>
    <h1>Ratings & Reviews</h1>
    <Rating/>
    <hr/>
    <Review/>
  </div>)
}

export default App
