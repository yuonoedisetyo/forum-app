import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LoadingBar from './common/LoadingBar';

function ThreadInput({ addThread, loading }) {
    const [title, onTitleChange] = useInput('');
    const [body, onBodyChange] = useInput('');
    const [category, onCategoryChange] = useInput('');

    const onSubmitHandler = (event) => {
        // Cegah peramban memuat ulang halaman
        event.preventDefault();

        // Membaca data form
        const form = event.target;
        console.log("form ", form)
        const formData = new FormData(form);
        console.log("formData ", formData)

        // Atau Anda dapat mengerjakannya sebagai objek biasa:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        addThread(formJson)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="title" placeholder='Title' value={title} onChange={onTitleChange} />
            <input type="text" name="body" placeholder='Body' value={body} onChange={onBodyChange} />
            <input type="text" name="category" placeholder='Category' value={category} onChange={onCategoryChange} />
            <LoadingBar/>
            <button disabled={loading}>{loading ? 'Loading ...' : "Create Thread"}</button>
        </form>
    );
}

ThreadInput.propTypes = {
    //   login: PropTypes.func.isRequired,
    //   loading: PropTypes.bool,
}

export default ThreadInput;