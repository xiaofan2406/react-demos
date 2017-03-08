import React from 'react';
import Button from 'widgets/Button';

/* eslint-disable react/no-multi-comp */

class NameGood extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  };

  state = {
    name: this.props.name
  };

  changeName = () => {
    this.setState({
      name: `${this.state.name}.a`
    });
  }
  render() {
    console.log('render NameGood');
    const { name } = this.state;
    return (
      <div>Name: {name} <Button onClick={this.changeName} text="Name+" /></div>
    );
  }
}

class AgeGood extends React.Component {
  static propTypes = {
    age: React.PropTypes.number.isRequired
  };

  state = {
    age: this.props.age
  };

  changeAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    console.log('render AgeGood');
    const { age } = this.state;
    return (
      <div>Age: {age} <Button onClick={this.changeAge} text="Age+" /></div>
    );
  }
}

class OpGood extends React.Component {
  static propTypes = {
    op: React.PropTypes.bool.isRequired
  };

  state = {
    op: this.props.op
  };

  changeOp = () => {
    this.setState({
      op: !this.state.op
    });
  }

  render() {
    console.log('render OpGood');
    const { op } = this.state;
    return (
      <div>OP: {String(op)} <Button onClick={this.changeOp} text="OP!" /></div>
    );
  }
}


class ParentGood extends React.Component {
  state = {
    name: 'D.Va',
    age: 18,
    op: true
  }

  render() {
    console.log('render ParentGood');
    const { name, age, op } = this.state;
    return (
      <div>
        <NameGood name={name} />
        <AgeGood age={age} />
        <OpGood op={op} />
      </div>
    );
  }
}

export default ParentGood;
