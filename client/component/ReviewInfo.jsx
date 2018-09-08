import React from 'react';
import User from './User.jsx';

const ReviewInfo = props => {
  return (<div>
    <div className='user'>
      <img className='userPicture' src={props.user.picture}/>
      <User user={props.user}/>
    </div>
    <div>
      <info>Eye Color</info>: {props.user.eyeColor}</div>
    <div>
      <info>Hair Color</info>: {props.user.hairColor}</div>
    <div>
      <info>Skin Tone</info>: {props.user.skinTone}</div>
    <div>
      <info>Skin Type</info>: {props.user.skinType}</div>
  </div>)
}

export default ReviewInfo;
