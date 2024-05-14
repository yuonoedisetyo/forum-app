import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ onInput, placeholder }) {
  return (
    <div
      className="comment-input"
      data-placeholder={placeholder}
      contentEditable
      onInput={onInput}
    />
  );
}

TextArea.propTypes = {
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
}

export default TextArea;