import React from 'react';
import Demo from 'widgets/Demo';
import Good from './Good';
import Bad from './Bad';

function SetStateDemo() {
  return (
    <Demo
      first={<Bad />}
      second={<Good />}
      description={[
        'In `React.Component`, `this.setState` will trigger a re-render everytime, ',
        'regardless of whether state has changed or not'
      ].join('')}
    />
  );
}


export default SetStateDemo;
