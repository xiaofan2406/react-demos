import React from 'react';
import Button from 'widgets/Button';


function NameBad({ name }) {
  console.log('render NameBad');
  return <span>Name: {name}</span>;
}
NameBad.propTypes = {
  name: React.PropTypes.string.isRequired
};

function AgeBad({ age }) {
  console.log('render AgeBad');
  return <span>Age: {age}</span>;
}
AgeBad.propTypes = {
  age: React.PropTypes.number.isRequired
};

function OpBad({ op }) {
  console.log('render OpBad');
  return <span>OP: {String(op)}</span>;
}
OpBad.propTypes = {
  op: React.PropTypes.bool.isRequired
};

class ParentBad extends React.Component {
  state = {
    name: 'D.Va',
    age: 18,
    op: true
  }
  changeName = () => {
    this.setState({
      name: `${this.state.name}.a`
    });
  }
  changeAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  }
  changeOp = () => {
    this.setState({
      op: !this.state.op
    });
  }

  render() {
    console.log('render ParentBad');
    const { name, age, op } = this.state;
    return (
      <div>
        <div>
          <NameBad name={name} /> <Button onClick={this.changeName} text="Name+" />
        </div>
        <div>
          <AgeBad age={age} /> <Button onClick={this.changeAge} text="Age+" />
        </div>
        <div>
          <OpBad op={op} /> <Button onClick={this.changeOp} text="OP!" />
        </div>
      </div>
    );
  }
}

export default ParentBad;
