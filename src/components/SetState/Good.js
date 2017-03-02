import React from 'react';
import Demo from 'widgets/Demo';

class SetStateGood extends React.PureComponent {
  state = {
    isRock: false
  };

  rock = () => {
    this.setState({
      isRock: true
    });
  }

  render() {
    console.log('render SetStateGood');
    const { isRock } = this.state;
    return (
      <Demo
        title="`this.setState` good practice"
        description="`React.PureComponent` will do a shallow comparision on `state` or `props`"
      >
        <div>React rocks?: {String(isRock)}</div>
        <button onClick={this.rock}>Rock!</button>
      </Demo>
    );
  }
}


export default SetStateGood;
