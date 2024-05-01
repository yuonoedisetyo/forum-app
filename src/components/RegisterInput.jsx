import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = (event) => {
    // Cegah peramban memuat ulang halaman
    event.preventDefault();

    // Membaca data form
    const form = event.target;
    console.log("form ", form)
    const formData = new FormData(form);
    console.log("formData ", formData)

    // Anda dapat mengoper formData sebagai fetch body secara langsung:
    // fetch('/some-api', { method: form.method, body: formData });
    // register(formData)

    // Atau Anda dapat mengerjakannya sebagai objek biasa:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    register(formJson)
  }

  return (
    <div style={{}}>
      <h3>Register</h3>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} onChange={onEmailChange} />
        <input type="text" name="name" value={name} onChange={onNameChange} />
        <input type="text" name="password" value={password} onChange={onPasswordChange} />
        <button type='submit'
        // onClick={()=>register({name,email,password})}
        >Simpan</button>
      </form>

    </div>
  );
}

export default RegisterInput;
