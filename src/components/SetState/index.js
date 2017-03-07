import React from 'react';
import Demo from 'widgets/Demo';
import SetStateGood from './SetStateGood';
import SetStateBad from './SetStateBad';

function SetStateDemo() {
  return (
    <div>
      <h3>Basic demo</h3>
      <Demo
        first={<SetStateBad />}
        second={<SetStateGood />}
        firstTitle="Bad example"
        secondTitle="Good example"
        firstNote="This component will re-render everytime when the button is clicked, because `setState` is triggered"
        secondNote="This component will only re-render on the first button click."
        description={[
          'In `React.Component`, `this.setState` will trigger a re-render everytime, ',
          'regardless of whether state has changed or not.',
          'Therefore, it is important to make sure to only call `this.setState` when necessary. ',
          '_(Open console for this demo)_'
        ].join('')}
      />
    </div>

  );
}


export default SetStateDemo;
