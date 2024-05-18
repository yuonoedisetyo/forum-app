import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/Header';
import { asyncReceiveMyAccount } from '../states/account/action';

function MyAccount() {
  const myAccount = useSelector((states) => states.myAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveMyAccount());
  }, [dispatch]);

  useEffect(() => {
  }, [myAccount]);

  return (
    <>
      <Header />
      <main>
        <div className="thread-item">
          <div style={{textAlign:'center',alignItems:'center',alignSelf:'center',alignContent:'center',maxWidth:400 }}>
            <img
                alt="avatar"
                src={myAccount?.avatar}
                style={{
                  height: 100, width: 100, alignSelf: 'center', marginRight: 8,
                }}
              />
            <div style={{marginTop:16,alignSelf:'center'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <label htmlFor="labelname">Nama</label>
                  <label htmlFor="name">{myAccount?.name}</label>
                </div>
                <div style={{height:16}}/>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <label htmlFor="labelname">Email</label>
                  <label htmlFor="name">{myAccount?.email}</label>
                </div>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
