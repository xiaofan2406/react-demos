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
  title: {
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

function Demo({ sheet: { classes }, children, description, title }) {
  return (
    <div className={classes.demo}>
      {title && <ReactMarkdown className={classes.title} source={title} />}
      <div className={classes.content}>
        <div className={classes.half}>
          <ReactMarkdown source={description} />
        </div>
        <div className={classes.half}>
          {children}
        </div>
      </div>
    </div>
  );
}

Demo.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default injectSheet(sheet)(Demo);
