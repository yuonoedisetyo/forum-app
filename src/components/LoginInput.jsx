import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login,loading }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

  const onSubmitHandler=(event)=> {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    console.log("form ",form)
    const formData = new FormData(form);
    console.log("formData ",formData)

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    login(formJson)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="email" name="email" placeholder='Email' value={email} onChange={onEmailChange} />
      <input type="password" name="password" placeholder='Password' value={password} onChange={onPasswordChange} />
      <button disabled={loading}>{ loading ? 'Logging in..' : "Masuk" }</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default LoginInput;