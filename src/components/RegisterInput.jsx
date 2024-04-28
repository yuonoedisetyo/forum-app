import React, { useState } from 'react';

function RegisterInput({register}) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleChangeEmail =({text})=>{
     setEmail(text)
   }
   const handleChangeName =({text})=>{
     setName(text)
   }
   const handleChangePassword =({text})=>{
     setPassword(text)
   }

   const handleSubmit=(e)=> {
    // Cegah peramban memuat ulang halaman
    e.preventDefault();

    // Membaca data form
    const form = e.target;
    console.log("form ",form)
    const formData = new FormData(form);
    console.log("formData ",formData)

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
      <input type="text" name="email" value={email} onChange={handleChangeEmail} />
      <input type="text" name="name" value={name} onChange={handleChangeName} />
      <input type="text" name="password" value={password} onChange={handleChangePassword} />
      <button type='submit' 
      // onClick={()=>register({name,email,password})}
      >Simpan</button>
        </form>
       
    </div>
  );
}

export default RegisterInput;
