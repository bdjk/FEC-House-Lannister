import React from 'react';
import axios from 'axios';

var x = 0;

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulCount: '',
      username: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('updated', prevState.helpfulCount, this.props.helpfulCount)
    if (x === 0) {
      if (prevState.helpfulCount !== this.props.helpfulCount) {
        this.setState({helpfulCount: this.props.helpfulCount})
      }
      if (prevState.username !== this.props.username) {
        this.setState({username: this.props.username})
      }
    } else {
      this.setState({helpfulCount: prevState.helpfulCount})
      x--;
    }
  }

  upvote(spec1, spec2) {
    console.log('helpful', spec2)
    var upvoted = this.state.helpfulCount++;
    axios.post('/helpful', {
      [spec1]: spec2,
      helpfulCount: this.state.helpfulCount
    })
    this.setState({helpfulCount: upvoted})
    x++;
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
