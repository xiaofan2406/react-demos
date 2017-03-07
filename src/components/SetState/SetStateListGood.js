import React from 'react';
import Button from 'widgets/Button';

class SetStateListGood extends React.Component {
  state = {
    list: [
      { id: 1, name: 'react' },
      { id: 2, name: 'vue' },
      { id: 3, name: 'angular' },
      { id: 4, name: 'ember' }
    ]
  }

  hasBackbone = () => this.state.list.filter(item => item.name === 'backbone').length > 0

  addBackbone = () => {
    if (!this.hasBackbone()) {
      console.log('trying to add "backbone" to the list');
      this.setState({
        list: [...this.state.list, { id: 5, name: 'backbone' }]
      });
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
        <Button text="Add Backbone" onClick={this.addBackbone} />
      </div>
    );
  }
}


export default SetStateListGood;
