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

function ThreadDetailPage() {
    const threadDetail = useSelector((states) => states.threadDetail);
    const dispatch = useDispatch();

    console.log("threadDetail ", threadDetail)

    const { ThreadId } = useParams();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(ThreadId));
        // dispatch(asyncAddComment({content:"Tes Comment",ThreadId}));
    }, [dispatch]);

    const onAddComment = async ({ content }) => {
        dispatch(asyncAddComment({ content, ThreadId }));
        dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onUpVote = async () => {
        dispatch(asyncThreadUpVote(ThreadId));
        dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onDownVote = async () => {
        dispatch(asyncThreadDownVote(ThreadId));
        // dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onNeutralVote = async () => {
        dispatch(asyncThreadNeutralVote(ThreadId));
        dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onCommentUpVote = async (CommentId) => {
        dispatch(asyncCommentUpVote({ ThreadId, CommentId }));
        // dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onCommentDownVote = async (CommentId) => {
        dispatch(asyncCommentDownVote({ ThreadId, CommentId }));
        dispatch(asyncReceiveThreadDetail(ThreadId));
    }
    const onCommentNeutralVote = async (CommentId) => {
        dispatch(asyncCommentNeutralVote({ ThreadId, CommentId }));
        dispatch(asyncReceiveThreadDetail(ThreadId));
    }

    return (
        <>
            <ThreadDetail title={threadDetail?.title} body={threadDetail?.body} {...threadDetail} />
            <CommentsList comments={threadDetail?.comments} commentUpVote={onCommentUpVote} commentDownVote={onCommentDownVote}
                commentNeutralVote={onCommentNeutralVote} 
                />
            <CommentInput addComment={onAddComment} />

            <button onClick={onUpVote}>Up Vote</button>
            <UpVoteList upvotes={threadDetail?.upVotesBy} />
            <button onClick={onDownVote}>Down Vote</button>
            <DownVoteList downVotes={threadDetail?.downVotesBy} />
            <button onClick={onNeutralVote}>Neutral Vote</button>
        </>
    );
}

export default ThreadDetailPage;
