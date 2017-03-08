import React from 'react';
import Demo from 'widgets/Demo';

import ChildExampleBad from './ChildExampleBad';
import ChildExampleGood from './ChildExampleGood';

function ChildComponentDemo() {
  return (
    <div>
      <Demo
        first={<ChildExampleBad />}
        second={<ChildExampleGood />}
        firstTitle=""
        secondTitle=""
        description={[
          'parent, child'
        ].join('')}
      />
    </div>
  );
}


export default ChildComponentDemo;
