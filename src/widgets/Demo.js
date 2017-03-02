import React from 'react';
import injectSheet from 'styles';
import ReactMarkdown from 'react-markdown';

const sheet = {
  demo: {
    border: '1px solid #e9e9e9',
    '&:hover': {
      boxShadow: '0 1px 6px rgba(0,0,0,.2)'
    }
  },
  description: {
    borderBottom: '1px solid #e9e9e9',
    padding: '12px'
  },
  content: {
    display: 'flex'
  },
  half: {
    padding: '12px',
    flex: 1,
    '&:first-child': {
      borderRight: '1px solid #e9e9e9'
    }
  }
};

function Demo({ sheet: { classes }, first, second, firstNote, secondNote, description }) {
  return (
    <div className={classes.demo}>
      {description && <ReactMarkdown className={classes.description} source={description} />}
      <div className={classes.content}>
        <div className={classes.half}>
          {first}
          {firstNote}
        </div>
        <div className={classes.half}>
          {second}
          {secondNote}
        </div>
      </div>
    </div>
  );
}

Demo.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  first: React.PropTypes.node.isRequired,
  second: React.PropTypes.node.isRequired,
  description: React.PropTypes.string.isRequired,
  firstNote: React.PropTypes.string,
  secondNote: React.PropTypes.string
};
Demo.defaultProps = {
  firstNote: null,
  secondNote: null
};

export default injectSheet(sheet)(Demo);
