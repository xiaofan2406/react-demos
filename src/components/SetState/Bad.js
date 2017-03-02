import React from 'react';
import Demo from 'widgets/Demo';


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
      <Demo
        title="this.setState bad practice"
        description="In `React.Component`, `this.setState` will always
        trigger `shouldComponentUpdate`. For a simple `boolean` typed state,
        if you keep setting it to `true`,
        It will still trigger re-render
        "
      >
        <div>React rocks?: {String(isRock)}</div>
        <button onClick={this.makeCute}>Rock!</button>
      </Demo>
    );
  }
}


export default SetStateBad;
