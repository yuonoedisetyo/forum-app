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
      <h3>Register</h3>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} onChange={onEmailChange} />
        <input type="text" name="name" value={name} onChange={onNameChange} />
        <input type="text" name="password" value={password} onChange={onPasswordChange} />
        <LoadingBar />
        <button type="submit">
          Simpan
        </button>
      </form>

    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
