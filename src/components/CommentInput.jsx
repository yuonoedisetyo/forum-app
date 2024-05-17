import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import TextArea from './common/TextArea';

function CommentInput({ addComment, loading }) {
  const [content, onContentChange] = useInput('');

  const onSubmitHandler = (event) => {
    // // Cegah peramban memuat ulang halaman
    // event.preventDefault();

    // // Membaca data form
    // const form = event.target;
    // const formData = new FormData(form);

    // // Atau Anda dapat mengerjakannya sebagai objek biasa:
    // const formJson = Object.fromEntries(formData.entries());
    // console.log("formJson ",formJson)
    addComment({content});
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <TextArea content={content} onInput={onContentChange} placeholder="Tuliskan komentar disini ..." />
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
