import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import FilterSection from '../components/FilterSection';
import ThreadsList from '../components/ThreadsList';
import { asyncReceiveUsers } from '../states/account/action';
import { asyncReceiveThreads, asyncThreadDownVote, asyncThreadUpVote } from '../states/threads/action';
import { removeDuplicates } from '../utils';

function Threads() {
  const threads = useSelector((states) => states.threads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
    dispatch(asyncReceiveUsers());
  }, [dispatch]);

  const [filterValue, setFilterValue] = useState('');

  const onFilterAction = (value) => {
    setFilterValue(value);
  };

  const onUpVote = async (ThreadId) => {
    dispatch(asyncThreadUpVote(ThreadId));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onDownVote = async (ThreadId) => {
    dispatch(asyncThreadDownVote(ThreadId));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };

  return (
    <>
      <Header />
      <main>
        <FilterSection
          categories={removeDuplicates('category', threads)}
          onFilter={onFilterAction}
        />
        <div style={{ height: 16 }} />

        <Link to="/createThread">
          <Button label="Buat Thread" />
        </Link>

        <div style={{ height: 32 }} />
        <ThreadsList
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          threads={
            filterValue
              ? threads?.filter((item) => item.category === filterValue)
              : threads
          }
        />
      </main>
    </>
  );
}

export default Threads;
