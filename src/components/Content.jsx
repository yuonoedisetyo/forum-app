import React from 'react';
import parse from 'html-react-parser';
import { PropTypes } from 'prop-types';

function Content({ title, body, type }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <label htmlFor="title" style={{ fontWeight: 'bold', lineBreak: 'anywhere' }}>{title}</label>
      <br />
      <br />
      <p style={{
        WebkitLineClamp: type === 'detail' ? null : 4,
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        lineBreak: 'anywhere',
      }}
      >
        {body && parse(body)}
      </p>
      <br />
      <br />

    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Content;
