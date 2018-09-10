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
    <div id='filterBar'>
      <div className='divider'></div>
      <div className='filterTypes'>
        <span>Eye Color</span>
        <span>Hair Color</span>
        <span>Skin Tone</span>
        <span>Skin Type</span>
      </div>
    </div>
    <div className='divider'></div>
    <Review/>
  </div>)
}

export default App
