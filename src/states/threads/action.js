import {
  addComment, addThread, commentDownVote, commentNeutralVote,
  commentVoteUp, getThreads, threadDownVote, threadNeutralVote, threadVoteUp,
} from '../../data/network-data';
import { hideLoading, showLoading } from '../loading/action';

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: 'RECEIVE_THREAD_DETAIL',
    payload: {
      threadDetail,
    },
  };
}
function receiveThreadsActionCreator(threads) {
  return {
    type: 'RECEIVE_THREADS',
    payload: {
      threads,
    },
  };
}

function receiveAddThreadActionCreator({
  id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments,
}) {
  return {
    type: 'ADD_THREAD',
    payload: {
      id,
      title,
      body,
      category,
      createdAt,
      ownerId,
      upVotesBy,
      downVotesBy,
      totalComments,
    },
  };
}

function receiveAddCommentActionCreator({
  id, content, createdAt, upVotesBy, downVotesBy, owner,
}) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      id,
      content,
      createdAt,
      upVotesBy,
      downVotesBy,
      owner,
    },
  };
}

function receiveThreadUpVoteActionCreator({
  id, userId, threadId, voteType,
}) {
  return {
    type: 'THREAD_UPVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType,
    },
  };
}
function receiveThreadDownVoteActionCreator({
  id, userId, threadId, voteType,
}) {
  return {
    type: 'THREAD_DOWNVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType,
    },
  };
}
function receiveThreadNeutralVoteActionCreator({
  id, userId, threadId, voteType,
}) {
  return {
    type: 'THREAD_NEUTRALVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType,
    },
  };
}
function receiveCommentUpVoteActionCreator({
  id, userId, commentId, voteType,
}) {
  return {
    type: 'COMMENT_UPVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType,
    },
  };
}
function receiveCommentDownVoteActionCreator({
  id, userId, commentId, voteType,
}) {
  return {
    type: 'COMMENT_DOWNVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType,
    },
  };
}

function receiveCommentNeutralVoteActionCreator({
  id, userId, commentId, voteType,
}) {
  return {
    type: 'COMMENT_NEUTRALVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType,
    },
  };
}

function asyncReceiveThreads() {
  return async (dispatch) => {
    // dispatch(showLoading());
    dispatch(showLoading());
    // const threads = await mockAPI.getTodos();
    const threads = await getThreads();
    dispatch(receiveThreadsActionCreator(threads));
    // dispatch(hideLoading());
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(ThreadId) {
  console.log("asyncReceiveThreadDetail ")
  return async (dispatch) => {
    dispatch(showLoading());
    const threadDetail = await getThreads(ThreadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
    dispatch(hideLoading());
  };
}

function asyncAddThread(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { thread } = await addThread(formData);
    dispatch(receiveAddThreadActionCreator(thread));
    dispatch(hideLoading());
  };
}

function asyncAddComment(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { comment } = await addComment(formData);
    dispatch(receiveAddCommentActionCreator(comment));
    dispatch(hideLoading());
  };
}

function asyncThreadUpVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { upVotes } = await threadVoteUp(ThreadId);
    console.log("upVotes ",upVotes)
    // dispatch(receiveThreadUpVoteActionCreator(upVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentUpVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { upVotes } = await commentVoteUp({ ThreadId, CommentId });
    dispatch(receiveCommentUpVoteActionCreator(upVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentDownVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { downVotes } = await commentDownVote({ ThreadId, CommentId });
    dispatch(receiveCommentDownVoteActionCreator(downVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentNeutralVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { neutralVotes } = await commentNeutralVote({ ThreadId, CommentId });
    dispatch(receiveCommentNeutralVoteActionCreator(neutralVotes));
    dispatch(hideLoading());
  };
}
function asyncThreadDownVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { downVotes } = await threadDownVote(ThreadId);
    dispatch(receiveThreadDownVoteActionCreator(downVotes));
    dispatch(hideLoading());
  };
}
function asyncThreadNeutralVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { vote } = await threadNeutralVote(ThreadId);
    dispatch(receiveThreadNeutralVoteActionCreator(vote));
    dispatch(hideLoading());
  };
}

export {
  asyncReceiveThreads,
  receiveThreadsActionCreator,
  asyncReceiveThreadDetail,
  receiveAddThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
  receiveAddCommentActionCreator,
  asyncThreadUpVote,
  asyncThreadDownVote,
  asyncThreadNeutralVote,
  asyncCommentUpVote,
  asyncCommentDownVote,
  asyncCommentNeutralVote,
};
