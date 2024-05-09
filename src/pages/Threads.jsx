import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterSection from '../components/FilterSection';
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
      <FilterSection
        categories={removeDuplicates(threads, 'category')}
        onFilter={onFilterAction}
      />
      <ThreadInput addThread={onAddThread} />
      <ThreadsList
        threads={filterValue ? threads?.filter((item) => item.category === filterValue) : threads}
      />
    </>
  );
}

export default Threads;
