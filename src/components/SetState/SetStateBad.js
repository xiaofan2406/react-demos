import React from 'react';
import Button from 'widgets/Button';

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
        <div>React rocks?: <strong>{isRock ? 'Yes :)' : 'No :('}</strong></div>
        <Button onClick={this.startRocking} text="Start rocking!" />
        <Button onClick={this.stopRocking} text="Stop rocking!" />
      </div>
    );
  }
}


export default SetStateBad;
