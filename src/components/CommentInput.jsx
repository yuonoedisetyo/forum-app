import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextArea from './common/TextArea';

function CommentInput({ addComment, loading }) {
  const [content, setContent] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addComment({ content });
  };

  const onInputHandler = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <TextArea onInput={onInputHandler} placeholder="Tuliskan komentar disini ..." />
      <div style={{ height: 16 }} />
      <div style={{ textAlign: 'right' }}>
        <button type="submit" disabled={loading}>{loading ? 'Loading ...' : 'Create Comment'}</button>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CommentInput;
