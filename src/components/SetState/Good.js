import React from 'react';

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
      <div>
        <div>React rocks?: {String(isRock)}</div>
        <button onClick={this.rock}>Rock!</button>
      </div>
    );
  }
}


export default SetStateGood;
