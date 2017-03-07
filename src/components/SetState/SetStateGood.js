import React from 'react';
import Button from 'widgets/Button';

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
        <div>React rocks?: <strong>{isRock ? 'Yes :)' : 'No :('}</strong></div>
        <Button onClick={this.startRocking} text="Start rocking!" />
        <Button onClick={this.stopRocking} text="Stop rocking!" />
      </div>
    );
  }
}


export default SetStateGood;
