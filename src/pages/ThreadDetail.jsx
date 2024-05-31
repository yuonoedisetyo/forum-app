import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentList';
import Header from '../components/common/Header';
import ThreadItem from '../components/ThreadItem';
import {
  asyncAddComment,
  asyncCommentDownVote,
  asyncCommentNeutralVote,
  asyncCommentUpVote,
  asyncReceiveThreadDetail,
  asyncThreadDownVote,
  asyncThreadNeutralVote,
  asyncThreadUpVote,
} from '../states/threads/action';

function ThreadDetailPage() {
  const threadDetail = useSelector((states) => states.threadDetail);
  // const comments = useSelector((states) => states.comments);
  const dispatch = useDispatch();

  const { ThreadId } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(ThreadId));
    // dispatch(asyncAddComment({content:"Tes Comment",ThreadId}));
  }, [dispatch]);

  const onAddComment = async ({ content }) => {
    dispatch(asyncAddComment({ content, ThreadId }));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onUpVote = async () => {
    dispatch(asyncThreadUpVote(ThreadId));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onDownVote = async () => {
    dispatch(asyncThreadDownVote(ThreadId));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onNeutralVote = async () => {
    dispatch(asyncThreadNeutralVote(ThreadId));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentUpVote = async (CommentId) => {
    dispatch(asyncCommentUpVote({ ThreadId, CommentId }));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentDownVote = async (CommentId) => {
    dispatch(asyncCommentDownVote({ ThreadId, CommentId }));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentNeutralVote = async (CommentId) => {
    dispatch(asyncCommentNeutralVote({ ThreadId, CommentId }));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };

  return (
    <>
      <Header />
      <main>
        {threadDetail?.id
          && (
            <ThreadItem
              type="detail"
              // id={threadDetail?.id}
              // title={threadDetail?.title}
              // body={threadDetail?.body}
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              // upVotesBy={threadDetail?.upVotesBy}
              // downVotesBy={threadDetail?.downVotesBy}
              onNeutralVote={onNeutralVote}
              {...threadDetail}
            />
          )}
        <div style={{ height: 16 }} />
        {threadDetail?.comments
          && (
          <CommentsList
            comments={threadDetail?.comments?.sort((b, a) => {
              if (a.createdAt < b.createdAt) return 1;
              if (a.createdAt > b.createdAt) return -1;
              return 0;
            })}
            commentUpVote={onCommentUpVote}
            commentDownVote={onCommentDownVote}
            commentNeutralVote={onCommentNeutralVote}
          />
          )}
        <div style={{ height: 16 }} />
        <CommentInput addComment={onAddComment} />

      </main>
    </>
  );
}

export default ThreadDetailPage;
