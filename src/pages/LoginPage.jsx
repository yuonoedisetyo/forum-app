import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncLogin } from '../states/account/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((states) => states.token);

  const [loading] = useState(false);
  const [errorMessage] = useState('');

  // async function onLogin({ email, password }) {
  //   setLoading(true)
  //   const { error, data } = await login({ email, password });
  //   setLoading(false)
  //   setErrorMessage(error)

  //   console.log("error", error)
  //   if (!error) {
  //     setLoading(true)
  //     loginSuccess(data);
  //     setLoading(false)
  //     // onloginSuccess(data);
  //   }
  // }

  const onLogin = async (formdata) => {
    dispatch(asyncLogin(formdata));
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    // <>
    //   {!loadingUser &&
    <section>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} loading={loading} />
      {loading
        ? <h1>Sedang memuat data ...</h1>
        : errorMessage && <p>{errorMessage}</p>}
      <p>
        Belum punya akun?
        {' '}
        <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
    //   }
    // </>
  );
}

LoginPage.propTypes = {
};

export default LoginPage;
