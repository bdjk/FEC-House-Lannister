import React from 'react';
import axios from 'axios';

var x = 0;

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulCount: props.helpfulCount,
      username: props.username
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (x === 0) {
      // console.log('here')
      if (prevState.helpfulCount !== this.props.helpfulCount) {
        this.setState({ helpfulCount: this.props.helpfulCount })
      }
      if (prevState.username !== this.props.username) {
        this.setState({ username: this.props.username })
      }
    }
    if (x === 1) {
      this.setState({ helpfulCount: this.state.helpfulCount })
      x++;
    }
  }

  upvote(spec1, spec2) {
    var upvoted = this.state.helpfulCount += 1;
    // console.log(upvoted)
    axios.post('http://54.212.84.135/helpful', {
      [spec1]: spec2,
      helpfulCount: upvoted
    })
    x++;
    this.setState({ helpfulCount: this.state.helpfulCount })
  }

  render() {
    return (<div>
      <button className="buttonHelpful" onClick={() => {
        this.upvote('name', this.state.username)
      }}>
        Helpful({this.state.helpfulCount})
      </button>
    </div>)
  }
}

export default HelpfulButton;
