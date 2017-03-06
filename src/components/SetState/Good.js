import React from 'react';

class SetStateGood extends React.Component {
  state = {
    isRock: false
  };

  rock = () => {
    if (!this.state.isRock) {
      this.setState({
        isRock: true
      });
    }
  }

  render() {
    console.log('render SetStateGood');
    const { isRock } = this.state;
    return (
      <div>
        <div>React rocks?: {isRock ? 'Yes :)' : 'No :('}</div>
        <button onClick={this.rock}>Rock!</button>
      </div>
    );
  }
}


export default SetStateGood;
