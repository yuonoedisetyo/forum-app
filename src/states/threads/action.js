import { hideLoading, showLoading } from 'react-redux-loading-bar';
import API from '../../data/network-data';
// import { hideLoading, showLoading } from '../loading/action';

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
    try {
    // const threads = await mockAPI.getTodos();
      const threads = await API.getThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert('Ups, something went wrong');
    }
    // dispatch(hideLoading());
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await API.getThreadsDetail(ThreadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert('Ups, something went wrong');
    }
    dispatch(hideLoading());
  };
}

function asyncAddThread(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { thread } = await API.addThread(formData);
    dispatch(receiveAddThreadActionCreator(thread));
    dispatch(hideLoading());
  };
}

function asyncAddComment(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { comment } = await API.addComment(formData);
      dispatch(receiveAddCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncThreadUpVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { upVotes } = await API.threadVoteUp(ThreadId);
    dispatch(receiveThreadUpVoteActionCreator(upVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentUpVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { upVotes } = await API.commentVoteUp({ ThreadId, CommentId });
    dispatch(receiveCommentUpVoteActionCreator(upVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentDownVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { downVotes } = await API.commentDownVote({ ThreadId, CommentId });
    dispatch(receiveCommentDownVoteActionCreator(downVotes));
    dispatch(hideLoading());
  };
}
function asyncCommentNeutralVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { neutralVotes } = await API.commentNeutralVote({ ThreadId, CommentId });
    dispatch(receiveCommentNeutralVoteActionCreator(neutralVotes));
    dispatch(hideLoading());
  };
}
function asyncThreadDownVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { downVotes } = await API.threadDownVote(ThreadId);
    dispatch(receiveThreadDownVoteActionCreator(downVotes));
    dispatch(hideLoading());
  };
}
function asyncThreadNeutralVote(ThreadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { vote } = await API.threadNeutralVote(ThreadId);
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
  receiveThreadDetailActionCreator,
};
