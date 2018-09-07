import React from 'react';

const ReviewInfo = props => {
  return (
    <div>
      <span>{props.user.name}</span>
      <li>Eye Color: {props.user.eyeColor}</li>
      <li>Hair Color: {props.user.hairColor}</li>
      <li>Skin Tone: {props.user.skinTone}</li>
      <li>Skin Type: {props.user.skinType}</li>
    </div>
  )
}

export default ReviewInfo;