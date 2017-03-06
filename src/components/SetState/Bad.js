import React from 'react';


class SetStateBad extends React.Component {
  state = {
    isRock: false
  };

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
        <button onClick={this.rock}>Rock!</button>
      </div>
    );
  }
}


export default SetStateBad;
