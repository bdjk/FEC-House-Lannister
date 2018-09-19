import React from 'react';
import Review from './Review.jsx';
import Rating from './Rating.jsx';
import FilterSortBar from './FilterSortBar.jsx';
import EyeColor from './EyeColor.jsx';
import Styles from '../styles.js';
import axios from 'axios';

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
    this.getSpecificUsers = this.getSpecificUsers.bind(this);
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

  getSpecificUsers(spec) {
    console.log('get em', spec)
    axios.get('/specific', {
      params: {
        spec: spec
      }
    }).then((users) => {
      console.log('got specific users', users.data)
      this.setState({users: users.data})
    })
  }

  render() {
    return (<Styles>
      <h1 className='header'>Ratings & Reviews</h1>
      <Rating/>
      <br/>
      <div className="filterSortBar">
        <FilterSortBar/>
      </div>
      <div className='topDivider'></div>
      <div id='filterBar'>
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
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('blue')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-blue.png" height="26px" width="26px"/>Blue</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-brown.png" height="26px" width="26px"/>Brown</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-green.png" height="26px" width="26px"/>Green</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-grey.png" height="26px" width="26px"/>Gray</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-hazel.png" height="26px" width="26px"/>Hazel</div>
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
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-blonde.png" height="26px" width="26px"/>Blonde</div>
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-brunette.png" height="26px" width="26px"/>Brunette</div>
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-auburn.png" height="26px" width="26px"/>Auburn</div>
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-black.png" height="26px" width="26px"/>Black</div>
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-red.png" height="26px" width="26px"/>Red</div>
                    <div className="choice" onClick={() => {
                        this.getSpecificUsers()
                      }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-gray.png" height="26px" width="26px"/>Gray</div>
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
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-porcelain.png" height="26px" width="26px"/>Porcelain</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-fair.png" height="26px" width="26px"/>Fair</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-light.png" height="26px" width="26px"/>Light</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-medium.png" height="26px" width="26px"/>Medium</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-tan.png" height="26px" width="26px"/>Tan</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-olive.png" height="26px" width="26px"/>Olive</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-deep.png" height="26px" width="26px"/>Deep</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-dark.png" height="26px" width="26px"/>Dark</div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers()
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-ebony.png" height="26px" width="26px"/>Ebony</div>
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
        <div className='divider'></div>
      </div>
      <Review/>
    </Styles>)
  }
}

export default App
