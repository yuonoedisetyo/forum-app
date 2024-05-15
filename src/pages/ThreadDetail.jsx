import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentList';
import DownVoteList from '../components/DownVoteList';
import ThreadDetail from '../components/ThreadDetail';
import UpVoteList from '../components/UpVoteList';
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
import Header from '../components/common/Header';

function ThreadDetailPage() {
  const threadDetail = useSelector((states) => states.threadDetail);
  const dispatch = useDispatch();

  const { ThreadId } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(ThreadId));
    // dispatch(asyncAddComment({content:"Tes Comment",ThreadId}));
  }, [dispatch]);

  const onAddComment = async ({ content }) => {
    dispatch(asyncAddComment({ content, ThreadId }));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onUpVote = async () => {
    dispatch(asyncThreadUpVote(ThreadId));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onDownVote = async () => {
    dispatch(asyncThreadDownVote(ThreadId));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onNeutralVote = async () => {
    dispatch(asyncThreadNeutralVote(ThreadId));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentUpVote = async (CommentId) => {
    dispatch(asyncCommentUpVote({ ThreadId, CommentId }));
    // dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentDownVote = async (CommentId) => {
    dispatch(asyncCommentDownVote({ ThreadId, CommentId }));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };
  const onCommentNeutralVote = async (CommentId) => {
    dispatch(asyncCommentNeutralVote({ ThreadId, CommentId }));
    dispatch(asyncReceiveThreadDetail(ThreadId));
  };

  console.log("threadDetail?.upVotesBy ",threadDetail?.upVotesBy)
  return (
    <>
      <Header />
      <main>
        <ThreadDetail
          title={threadDetail?.title}
          body={threadDetail?.body}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          upVotesBy={threadDetail?.upVotesBy}
          downVotesBy={threadDetail?.downVotesBy}
          onNeutralVote={onNeutralVote}
          {...threadDetail}
        />
        <div style={{ height: 16 }} />
        <CommentsList
          comments={threadDetail?.comments}
          commentUpVote={onCommentUpVote}
          commentDownVote={onCommentDownVote}
          commentNeutralVote={onCommentNeutralVote}
        />
        <div style={{ height: 16 }} />
        <CommentInput addComment={onAddComment} />

        {/* <button type="button" onClick={onUpVote}>
          Up Vote
        </button>
        <UpVoteList upvotes={threadDetail?.upVotesBy} />
        <button type="button" onClick={onDownVote}>
          Down Vote
        </button>
        <DownVoteList downVotes={threadDetail?.downVotesBy} />
        <button type="button" onClick={onNeutralVote}>
          Neutral Vote
        </button> */}
      </main>
    </>
  );
}

export default ThreadDetailPage;
