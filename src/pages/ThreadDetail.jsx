import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import {
    asyncReceiveThreadDetail,
  asyncReceiveThreads,
} from '../states/threads/action';

function ThreadDetailPage() {
  const threadDetail = useSelector((states) => states.threadDetail);
  const dispatch = useDispatch();

  console.log("threadDetail ",threadDetail)

  const { ThreadId } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(ThreadId));
  }, [dispatch]);

  return (
    <ThreadDetail title={threadDetail?.title} body={threadDetail?.body} />
  );
}

export default ThreadDetailPage;
