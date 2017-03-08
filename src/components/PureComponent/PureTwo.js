import React from 'react';
import Button from 'widgets/Button';


class PureTwo extends React.Component {
  state = {
    isRocking: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    for (const propKey in nextProps) {
      if (nextProps[propKey] !== this.props[propKey]) {
        return true;
      }
    }
    for (const stateKey in nextState) {
      if (nextState[stateKey] !== this.state[stateKey]) {
        return true;
      }
    }
    return false;
  }

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
    console.log('render PurTwo');
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


export default PureTwo;
