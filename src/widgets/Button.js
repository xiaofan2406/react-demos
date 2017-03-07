import React from 'react';
import injectSheet from 'styles';
import classnames from 'classnames';

const sheet = {
  button: {
    backgroundColor: '#fff',
    border: '0',
    margin: '4px',
    padding: '4px 12px',
    outline: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.0784314)'
    },
    '&:active': {
      boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
    }
  }
};


function Button({ classes, text, ...rest }) {
  delete rest.sheet;
  return (
    <button
      className={classnames({
        [classes.button]: true,
        [rest.className]: rest.className
      })}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  classes: React.PropTypes.object.isRequired,
  text: React.PropTypes.string.isRequired
};

export default injectSheet(sheet)(Button);
