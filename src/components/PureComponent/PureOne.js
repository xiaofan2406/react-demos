import React from 'react';
import Button from 'widgets/Button';

class PureOne extends React.PureComponent {
  state = {
    isRocking: false
  };

  startRocking = () => {
    this.setState({
      isRocking: true
    });
  }
  stopRocking = () => {
    this.setState({
      isRocking: false
    });
  }

  render() {
    console.log('render PureOne');
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


export default PureOne;
