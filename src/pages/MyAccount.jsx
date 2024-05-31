/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Gap from '../components/common/Gap';
import Header from '../components/common/Header';
import { putAccessToken } from '../data/network-data';
import { asyncReceiveMyAccount, loginActionCreator } from '../states/account/action';

function MyAccount() {
  const myAccount = useSelector((states) => states.myAccount);
  const token = useSelector((states) => states.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(asyncReceiveMyAccount());
    }
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  const onLogout = () => {
    dispatch(loginActionCreator({ token: null }));
    putAccessToken(null);
  };

  return (
    <>
      <Header />
      <main>
        <div className="thread-item">
          <div style={{
            textAlign: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center', maxWidth: 400,
          }}
          >
            <img
              alt="avatar"
              src={myAccount?.avatar}
              style={{
                height: 100, width: 100, alignSelf: 'center', marginRight: 8, borderRadius: 10,
              }}
            />
            <div style={{ marginTop: 16, alignSelf: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label htmlFor="namaLabel">Nama</label>
                <label htmlFor="name">{myAccount?.name}</label>
              </div>
              <div style={{ height: 16 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label htmlFor="emailLabel">Email</label>
                <label htmlFor="email">{myAccount?.email}</label>
              </div>
            </div>
            <Gap height={16} />
            <div style={{ textAlign: 'left' }}>
              <Button label="Logout " onPress={onLogout} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
