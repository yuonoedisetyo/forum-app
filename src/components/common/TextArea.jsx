import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ onInput,content, placeholder }) {
  return (
    <div
      className="comment-input"
      data-placeholder={placeholder}
      contentEditable
      onInput={()=>onInput(content)}
    />
  );
}

TextArea.propTypes = {
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
}

export default TextArea;