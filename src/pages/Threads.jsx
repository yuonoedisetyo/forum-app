import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import {
  asyncReceiveThreads,
} from '../states/threads/action';

function Threads() {
  const threads = useSelector((states) => states.threads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
  }, [dispatch]);

  

  // function onAddThread(text) {
  //   const id = `todo-${+new Date()}`; // generate id using timestamp
  //   dispatch(
  //     addThreadActionCreator({
  //       id,
  //       text
  //     })
  //   );
  // }

  // function onToggleThread(id) {
  //   dispatch(toggleThreadActionCreator(id));
  // }

  // function onDeleteThread(id) {
  //   dispatch(deleteThreadActionCreator(id));
  // }

  console.log("threads1 ",threads)

  return (
    <ThreadsList threads={threads} />
  );
}

export default Threads;
