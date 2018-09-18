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
        <span className="eyeColor">
          <span>Eye Color</span>
          <span className="dropArrow">
            <svg viewBox="0 0 95 25" className="dropArrowSvg">
              <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
            </svg>
          </span>
        </span>
        <span className='filterVerticalBorder'></span>
        <span className="hairColor">
          <span>Hair Color</span>
          <span className="dropArrow">
            <svg viewBox="0 0 95 25" className="dropArrowSvg">
              <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
            </svg>
          </span>
        </span>
        <span className='filterVerticalBorder'></span>
        <span className="skinTone">
          <span>Skin Tone</span>
          <span className="dropArrow">
            <svg viewBox="0 0 95 25" className="dropArrowSvg">
              <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
            </svg>
          </span>
        </span>
        <span className='filterVerticalBorder'></span>
        <span className="skinType">
          <span>Skin Type</span>
          <span className="dropArrow">
            <svg viewBox="0 0 95 25" className="dropArrowSvg">
              <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
            </svg>
          </span>
        </span>
      </div>
    </div>
    <div className='divider'></div>
    <Review/>
  </div>)
}

export default App
