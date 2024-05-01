import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment, loading }) {
    const [content, onContentChange] = useInput('');

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
        addComment(formJson)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="content" placeholder='Title' value={content} onChange={onContentChange} />
            <button disabled={loading}>{loading ? 'Loading ...' : "Create Comment"}</button>
        </form>
    );
}

CommentInput.propTypes = {
    //   login: PropTypes.func.isRequired,
    //   loading: PropTypes.bool,
}

export default CommentInput;