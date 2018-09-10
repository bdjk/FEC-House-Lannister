import React from 'react';
import Review from './Review.jsx'
import Rating from './Rating.jsx'
import FilterSortBar from './FilterSortBar.jsx'

const App = props => {
  return (<div>
    <h1 className='header'>Ratings & Reviews</h1>
    <Rating/>
    <br/>
    <div className="filterSortBar">
      <FilterSortBar/>
    </div>
    <br/>
    <hr/>
    <Review/>
  </div>)
}

export default App
