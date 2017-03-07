import React from 'react';


class SetStateBad extends React.Component {
  state = {
    isRock: false
  };

  startRocking = () => {
    this.setState({
      isRock: true
    });
  }
  stopRocking = () => {
    this.setState({
      isRock: false
    });
  }

  rock = () => {
    this.setState({
      isRock: true
    });
  }

  render() {
    console.log('render SetStateBad');
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


export default SetStateBad;
