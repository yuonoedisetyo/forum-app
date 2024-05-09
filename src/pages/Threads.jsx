import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import ThreadsList from '../components/ThreadsList';
import {
  asyncAddThread,
  asyncReceiveThreads,
} from '../states/threads/action';

function Threads() {
  const threads = useSelector((states) => states.threads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
  }, [dispatch]);

  const onAddThread = async (formdata) => {
    dispatch(asyncAddThread(formdata));
  };

  return (
    <>
      <ThreadInput addThread={onAddThread} />
      <ThreadsList threads={threads} />
    </>
  );
}

export default Threads;
