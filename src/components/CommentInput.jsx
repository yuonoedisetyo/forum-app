import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment, loading }) {
  const [content, onContentChange] = useInput('');

  const onSubmitHandler = (event) => {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    const formData = new FormData(form);

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    addComment(formJson);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="content" placeholder="Title" value={content} onChange={onContentChange} />
      <button type="button" disabled={loading}>{loading ? 'Loading ...' : 'Create Comment'}</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CommentInput;
