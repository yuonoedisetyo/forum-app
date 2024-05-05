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
    console.log("dispatch(asyncReceiveThreads())")
    dispatch(asyncReceiveThreads());
  }, [dispatch]);


  const onAddThread = async (formdata) => {
    dispatch(asyncAddThread(formdata));
  }

  // function onToggleThread(id) {
  //   dispatch(toggleThreadActionCreator(id));
  // }

  // function onDeleteThread(id) {
  //   dispatch(deleteThreadActionCreator(id));
  // }

  console.log("threads1 ", threads)

  return (
    <>
      <ThreadInput addThread={onAddThread} />
      <ThreadsList threads={threads} />
    </>
  );
}

export default Threads;
