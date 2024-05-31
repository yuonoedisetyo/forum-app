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
      <div style={{ height: 16 }} />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <div style={{ height: 16 }} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <div style={{ height: 16 }} />
      <LoadingBar />
      <div style={{ textAlign: 'right' }}>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in..' : 'Masuk'}
        </button>
      </div>
      <div style={{ height: 16 }} />
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  loading: PropTypes.bool,
};

export default LoginInput;
