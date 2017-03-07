import React from 'react';

class SetStateGood extends React.Component {
  state = {
    isRock: false
  };

  startRocking = () => {
    if (!this.state.isRock) {
      this.setState({
        isRock: true
      });
    }
  }
  stopRocking = () => {
    if (this.state.isRock) {
      this.setState({
        isRock: false
      });
    }
  }

  render() {
    console.log('render SetStateGood');
    const { isRock } = this.state;
    return (
      <div>
        <div>React rocks?: {isRock ? 'Yes :)' : 'No :('}</div>
        <button onClick={this.startRocking}>Start rocking!</button>
        <button onClick={this.stopRocking}>Stop rocking!</button>
      </div>
    );
  }
}


export default SetStateGood;
