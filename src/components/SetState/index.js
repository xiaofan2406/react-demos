import React from 'react';
import Demo from 'widgets/Demo';
import Good from './Good';
import Bad from './Bad';

function SetStateDemo() {
  return (
    <Demo
      first={<Bad />}
      second={<Good />}
      firstTitle="Bad example"
      secondTitle="Good example"
      firstNote="This component will re-render everytime when the button is clicked, because `setState` is triggered"
      secondNote="This component will only re-render on the first button click."
      description={[
        'In `React.Component`, `this.setState` will trigger a re-render everytime, ',
        'regardless of whether state has changed or not.',
        'Therefore, it is important to make sure only call `this.setState` when necessary. ',
        '(Open console to check the difference with this demo)'
      ].join('')}
    />
  );
}


export default SetStateDemo;
