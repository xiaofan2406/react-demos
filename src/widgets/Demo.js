import React from 'react';
import injectSheet from 'styles';
import ReactMarkdown from 'react-markdown';

const sheet = {
  demo: {
    border: '1px solid #e9e9e9',
    '&:hover': {
      boxShadow: '0 1px 6px rgba(0,0,0,.2)'
    },
    maxWidth: '720px'
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
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    marginBottom: '12px',
    color: '#9c9c9c',
    display: 'inline-block',
    borderBottom: '1px solid #e9e9e9'
  }
};

function Demo({
  sheet: { classes }, first, second, firstTitle, firstNote, secondTitle, secondNote, description
}) {
  return (
    <div className={classes.demo}>
      {description && <ReactMarkdown className={classes.description} source={description} />}
      <div className={classes.content}>
        <div className={classes.half}>
          {firstTitle && <span className={classes.title}>{firstTitle}</span>}
          {first}
          {firstNote && <span className={classes.title}>{firstNote}</span>}
        </div>
        <div className={classes.half}>
          {secondTitle && <span className={classes.title}>{secondTitle}</span>}
          {second}
          {secondNote && <span className={classes.title}>{secondNote}</span>}
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
  firstTitle: React.PropTypes.string,
  firstNote: React.PropTypes.string,
  secondTitle: React.PropTypes.string,
  secondNote: React.PropTypes.string
};
Demo.defaultProps = {
  firstTitle: '',
  firstNote: '',
  secondTitle: '',
  secondNote: ''
};

export default injectSheet(sheet)(Demo);
