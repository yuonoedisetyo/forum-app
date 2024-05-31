import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import Header from '../components/common/Header';
import { asyncAddThread } from '../states/threads/action';

function CreateThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = async (formdata) => {
    dispatch(asyncAddThread(formdata));
    navigate('/');
  };

  return (
    <>
      <Header />
      <main>
        <ThreadInput addThread={onAddThread} />
      </main>
    </>
  );
}

export default CreateThread;
