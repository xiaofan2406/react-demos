import React from 'react';
import Demo from 'widgets/Demo';

import PureOne from './PureOne';
import PureTwo from './PureTwo';

function PureComponentDemo() {
  return (
    <div>
      <Demo
        first={<PureOne />}
        second={<PureTwo />}
        firstTitle=""
        secondTitle=""
        description={[
          'what is `React.PureComponent`'
        ].join('')}
      />
    </div>
  );
}


export default PureComponentDemo;
