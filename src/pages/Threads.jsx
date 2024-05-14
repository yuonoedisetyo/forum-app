import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/Header';
import FilterSection from '../components/FilterSection';
import ThreadsList from '../components/ThreadsList';
import {
  asyncAddThread,
  asyncReceiveThreads
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

  const removeDuplicates = (array, property) => {
    const uniqueMap = {};
    return array.filter((obj) => {
      const value = obj[property];
      if (!uniqueMap[value]) {
        uniqueMap[value] = true;
        return true;
      }
      return false;
    });
  };

  const [filterValue, setFilterValue] = useState('');

  const onFilterAction = (value) => {
    setFilterValue(value);
  };

  return (
    <>
      <Header />
      <main>
        <FilterSection
          categories={removeDuplicates(threads, 'category')}
          onFilter={onFilterAction}
        />
        <div style={{ height: 32 }} />
        {/* <ThreadInput addThread={onAddThread} /> */}
        <ThreadsList
          threads={filterValue ? threads?.filter((item) => item.category === filterValue) : threads}
        />
      </main>
    </>
  );
}

export default Threads;
