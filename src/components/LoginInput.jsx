import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';
import LoadingBar from './common/LoadingBar';

function LoginInput({ login, loading }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    const formData = new FormData(form);

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    login(formJson);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="email" name="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <LoadingBar />
      <button type="button" disabled={loading}>{loading ? 'Logging in..' : 'Masuk'}</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  loading: PropTypes.bool,
};

export default LoginInput;
