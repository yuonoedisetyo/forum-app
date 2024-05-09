import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div>
      <title>My Account</title>
      <label htmlFor="name">{myAccount?.name}</label>
      <label htmlFor="email">{myAccount?.email}</label>
      <label htmlFor="avatar">{myAccount?.avatar}</label>
    </div>
  );
}

export default MyAccount;
