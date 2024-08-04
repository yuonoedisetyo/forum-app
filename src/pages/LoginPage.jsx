import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import LoginInput from '../components/LoginInput';
import { asyncLogin } from '../states/account/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((states) => states.token);
  // const token = getAccessToken();

  const [loading] = useState(false);
  const [errorMessage] = useState('');

  const onLogin = async (formdata) => {
    dispatch(asyncLogin(formdata));
  };

  useEffect(() => {
    // alert(token);
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div style={{ maxWidth: 600 }}>
            <h2>Silakan login untuk melanjutkan ...</h2>
            <LoginInput login={onLogin} loading={loading} />
            {loading ? (
              <h1>Sedang memuat data ....</h1>
            ) : (
              errorMessage && <p>{errorMessage}</p>
            )}
            <p>
              Belum punya akun?
              {' '}
              <Link to="/register">Daftar di sini.</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
