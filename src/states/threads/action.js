import mockAPI from '../../data/mockAPI';
import { addComment, addThread, getThreads, threadDownUp, threadVoteUp } from '../../data/network-data';

function asyncReceiveThreads() {
  return async (dispatch) => {
    // const threads = await mockAPI.getTodos();
    const threads = await getThreads();
    dispatch(receiveThreadsActionCreator(threads));
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
    const {thread} = await addThread(formData);
    dispatch(receiveAddThreadActionCreator(thread));
  };
    
}

function asyncAddComment(formData){
  return async (dispatch) => {
    const {comment} = await addComment(formData);
    dispatch(receiveAddCommentActionCreator(comment));
  };
}

function asyncThreadUpVote(ThreadId){
  return async (dispatch) => {
    const {vote} = await threadVoteUp(ThreadId);
    dispatch(receiveThreadUpVoteActionCreator(vote));
  };
}
function asyncThreadDownVote(ThreadId){
  return async (dispatch) => {
    const {vote} = await threadDownUp(ThreadId);
    dispatch(receiveThreadDownVoteActionCreator(vote));
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


function receiveAddThreadActionCreator({id,title,body,category,createdAt,ownerId,upVotesBy,downVotesBy,totalComments}) {
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

function receiveAddCommentActionCreator({id,content,createdAt,upVotesBy,downVotesBy,owner}) {
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


function receiveThreadUpVoteActionCreator({id,userId,threadId,voteType}) {
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
function receiveThreadDownVoteActionCreator({id,userId,threadId,voteType}) {
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

export {
  asyncReceiveThreads,
  receiveThreadsActionCreator,
  asyncReceiveThreadDetail,
  receiveAddThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
  receiveAddCommentActionCreator,
  asyncThreadUpVote,
  asyncThreadDownVote
};
