import React from 'react';
import Button from 'widgets/Button';

class SetStateGood extends React.Component {
  state = {
    isRocking: false
  };

  startRocking = () => {
    if (!this.state.isRocking) {
      this.setState({
        isRocking: true
      });
    }
  }
  stopRocking = () => {
    if (this.state.isRocking) {
      this.setState({
        isRocking: false
      });
    }
  }

  render() {
    console.log('render SetStateGood');
    const { isRocking } = this.state;
    return (
      <div>
        <div>React rocks?: <strong>{isRocking ? 'Yes :)' : 'No :('}</strong></div>
        <Button onClick={this.startRocking} text="Start rocking!" />
        <Button onClick={this.stopRocking} text="Stop rocking!" />
      </div>
    );
  }
}


export default SetStateGood;
