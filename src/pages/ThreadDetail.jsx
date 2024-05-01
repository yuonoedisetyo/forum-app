import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentList';
import ThreadDetail from '../components/ThreadDetail';
import {
    asyncAddComment,
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
    // dispatch(asyncAddComment({content:"Tes Comment",ThreadId}));
  }, [dispatch]);

  const onAddComment = async({content})=>{
    dispatch(asyncAddComment({content,ThreadId}));
    dispatch(asyncReceiveThreadDetail(ThreadId));
    }

  return (
      <>
    <ThreadDetail title={threadDetail?.title} body={threadDetail?.body} />
    <CommentsList comments={threadDetail?.comments}/>
    <CommentInput addComment={onAddComment}/>
      </>
  );
}

export default ThreadDetailPage;
