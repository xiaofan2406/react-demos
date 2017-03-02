import React from 'react';


class SetStateBad extends React.Component {
  state = {
    isRock: false
  };

  makeCute = () => {
    this.setState({
      isRock: true
    });
  }

  render() {
    console.log('render SetStateBad');
    const { isRock } = this.state;
    return (
      <div>
        <div>React rocks?: {String(isRock)}</div>
        <button onClick={this.makeCute}>Rock!</button>
      </div>
    );
  }
}


export default SetStateBad;
