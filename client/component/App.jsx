import React from 'react';
import Review from './Review.jsx';
import Rating from './Rating.jsx';
import FilterSortBar from './FilterSortBar.jsx';
import EyeColor from './EyeColor.jsx';
import Styles from '../styles.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeColor: false,
      hairColor: false,
      skinTone: false,
      skinType: false
    }
    this.showEyeColor = this.showEyeColor.bind(this);
    this.showHairColor = this.showHairColor.bind(this);
    this.showSkinTone = this.showSkinTone.bind(this);
    this.showSkinType = this.showSkinType.bind(this);
  }

  showEyeColor() {
    console.log('eyes')
    var opposite = !this.state.eyeColor;
    this.setState({eyeColor: opposite})
  }

  showHairColor() {
    console.log('hair')
    var opposite = !this.state.hairColor;
    this.setState({hairColor: opposite})
  }

  showSkinTone() {
    console.log('skin tone')
    var opposite = !this.state.skinTone;
    this.setState({skinTone: opposite})
  }

  showSkinType() {
    console.log('skin type')
    var opposite = !this.state.skinType;
    this.setState({skinType: opposite})
  }

  render() {
    return (<Styles>
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
          <span className="eyeColor" onClick={this.showEyeColor}>
            <span>Eye Color</span>
            <span className="dropArrow">
              <svg viewBox="0 0 95 25" className="dropArrowSvg">
                <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
              </svg>
            </span>
            <span>
              {
                this.state.eyeColor
                  ? <div id="eyeColorOptions">
                      <div>Blue</div>
                      <div>Brown</div>
                      <div>Green</div>
                      <div>Gray</div>
                      <div>Hazel</div>
                    </div>
                  : <div></div>
              }
            </span>
          </span>
          <span className='filterVerticalBorder'></span>
          <span className="hairColor" onClick={this.showHairColor}>
            <span>Hair Color</span>
            <span className="dropArrow">
              <svg viewBox="0 0 95 25" className="dropArrowSvg">
                <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
              </svg>
            </span>
            {
              this.state.hairColor
                ? <div id="hairColorOptions">
                    <div>Blonde</div>
                    <div>Brunette</div>
                    <div>Auburn</div>
                    <div>Black</div>
                    <div>Red</div>
                    <div>Gray</div>
                  </div>
                : <div></div>
            }
          </span>
          <span className='filterVerticalBorder'></span>
          <span className="skinTone" onClick={this.showSkinTone}>
            <span>Skin Tone</span>
            <span className="dropArrow">
              <svg viewBox="0 0 95 25" className="dropArrowSvg">
                <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
              </svg>
            </span>
            <span>
              {
                this.state.skinTone
                  ? <div id="skinToneOptions">
                      <div>Porcelain</div>
                      <div>Fair</div>
                      <div>Light</div>
                      <div>Medium</div>
                      <div>Tan</div>
                      <div>Olive</div>
                      <div>Deep</div>
                      <div>Dark</div>
                      <div>Ebony</div>
                    </div>
                  : <div></div>
              }
            </span>
          </span>
          <span className='filterVerticalBorder'></span>
          <span className="skinType" onClick={this.showSkinType}>
            <span>Skin Type</span>
            <span className="dropArrow">
              <svg viewBox="0 0 95 25" className="dropArrowSvg">
                <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
              </svg>
            </span>
            <span>
              {
                this.state.skinType
                  ? <div id="skinTypeOptions">
                      <div>Normal</div>
                      <div>Combination</div>
                      <div>Dry</div>
                      <div>Oily</div>
                    </div>
                  : <div></div>
              }
            </span>
          </span>
        </div>
      </div>
      <div className='divider'></div>
      <Review/>
    </Styles>)
  }
}

export default App
