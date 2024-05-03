import mockAPI from '../../data/mockAPI';
import { addComment, addThread, commentDownVote, commentNeutralVote, commentVoteUp, getThreads, threadDownVote, threadNeutralVote, threadVoteUp } from '../../data/network-data';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function asyncReceiveThreads() {
  console.log("asyncReceiveThreads-- ")
  return async (dispatch) => {
    // dispatch(showLoading());
    // const threads = await mockAPI.getTodos();
    const threads = await getThreads();
    dispatch(receiveThreadsActionCreator(threads));
    // dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(ThreadId) {
  return async (dispatch) => {
    const threadDetail = await getThreads(ThreadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  };
}

function asyncAddThread(formData) {
  return async (dispatch) => {
    const { thread } = await addThread(formData);
    dispatch(receiveAddThreadActionCreator(thread));
  };

}

function asyncAddComment(formData) {
  return async (dispatch) => {
    const { comment } = await addComment(formData);
    dispatch(receiveAddCommentActionCreator(comment));
  };
}

function asyncThreadUpVote(ThreadId) {
  return async (dispatch) => {
    const { vote } = await threadVoteUp(ThreadId);
    dispatch(receiveThreadUpVoteActionCreator(vote));
  };
}
function asyncCommentUpVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    const { upVotes } = await commentVoteUp({ ThreadId, CommentId });
    dispatch(receiveCommentUpVoteActionCreator(upVotes));
  };
}
function asyncCommentDownVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    const { downVotes } = await commentDownVote({ ThreadId, CommentId });
    dispatch(receiveCommentDownVoteActionCreator(downVotes));
  };
}
function asyncCommentNeutralVote({ ThreadId, CommentId }) {
  return async (dispatch) => {
    const { neutralVotes } = await commentNeutralVote({ ThreadId, CommentId });
    dispatch(receiveCommentNeutralVoteActionCreator(neutralVotes));
  };
}
function asyncThreadDownVote(ThreadId) {
  return async (dispatch) => {
    const { vote } = await threadDownVote(ThreadId);
    dispatch(receiveThreadDownVoteActionCreator(vote));
  };
}
function asyncThreadNeutralVote(ThreadId) {
  return async (dispatch) => {
    const { vote } = await threadNeutralVote(ThreadId);
    dispatch(receiveThreadNeutralVoteActionCreator(vote));
  };
}


function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: 'RECEIVE_THREAD_DETAIL',
    payload: {
      threadDetail
    }
  };
}
function receiveThreadsActionCreator(threads) {
  return {
    type: 'RECEIVE_THREADS',
    payload: {
      threads
    }
  };
}


function receiveAddThreadActionCreator({ id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments }) {
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
      totalComments
    }
  };
}

function receiveAddCommentActionCreator({ id, content, createdAt, upVotesBy, downVotesBy, owner }) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      id,
      content,
      createdAt,
      upVotesBy,
      downVotesBy,
      owner
    }
  };
}


function receiveThreadUpVoteActionCreator({ id, userId, threadId, voteType }) {
  return {
    type: 'THREAD_UPVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType
    }
  };
}
function receiveThreadDownVoteActionCreator({ id, userId, threadId, voteType }) {
  return {
    type: 'THREAD_DOWNVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType
    }
  };
}
function receiveThreadNeutralVoteActionCreator({ id, userId, threadId, voteType }) {
  return {
    type: 'THREAD_NEUTRALVOTE',
    payload: {
      id,
      userId,
      threadId,
      voteType
    }
  };
}
function receiveCommentUpVoteActionCreator({ id, userId, commentId, voteType }) {
  return {
    type: 'COMMENT_UPVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType
    }
  };
}
function receiveCommentDownVoteActionCreator({ id, userId, commentId, voteType }) {
  return {
    type: 'COMMENT_DOWNVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType
    }
  };
}

function receiveCommentNeutralVoteActionCreator({ id, userId, commentId, voteType }) {
  return {
    type: 'COMMENT_NEUTRALVOTE',
    payload: {
      id,
      userId,
      commentId,
      voteType
    }
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
  asyncCommentNeutralVote
};
