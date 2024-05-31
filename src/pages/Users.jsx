import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList';
import { asyncReceiveUsers } from '../states/account/action';

function Users() {
  const users = useSelector((states) => states.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveUsers());
  }, [dispatch]);

  return (
    <UsersList users={users} />
  );
}

export default Users;
