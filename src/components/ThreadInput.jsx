import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import Button from './common/Button';
import LoadingBar from './common/LoadingBar';
import TextArea from './common/TextArea';

function ThreadInput({ addThread, loading }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useState('');
  const [category, onCategoryChange] = useInput('');

  const onSubmitHandler = (event) => {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    const formData = new FormData(form);

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    addThread({ ...formJson, body });
  };

  const onInputHandler = (event) => {
    onBodyChange(event.target.innerHTML);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="title" placeholder="Title" value={title} onChange={onTitleChange} />
      <div style={{ height: 16 }} />
      <TextArea onInput={onInputHandler} placeholder="Tuliskan thread disini ..." />
      <div style={{ height: 16 }} />
      <input type="text" name="category" placeholder="Category" value={category} onChange={onCategoryChange} />
      <div style={{ height: 16 }} />
      <LoadingBar />
      <Button secondary disabled={loading} label={loading ? 'Loading ...' : 'Create Thread'} type="submit" />
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ThreadInput;
