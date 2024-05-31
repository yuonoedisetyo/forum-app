import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';
import LoadingBar from './common/LoadingBar';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = (event) => {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    const formData = new FormData(form);

    // Anda dapat mengoper formData sebagai fetch body secara langsung:
    // fetch('/some-api', { method: form.method, body: formData });
    // register(formData)

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    register(formJson);
  };

  return (
    <div style={{}}>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <div style={{ height: 16 }} />
        <input type="text" placeholder="Nama" name="name" value={name} onChange={onNameChange} />
        <div style={{ height: 16 }} />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <div style={{ height: 16 }} />
        <LoadingBar />
        <div style={{ textAlign: 'right' }}>
          <button type="submit">Simpan</button>
        </div>
      </form>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
