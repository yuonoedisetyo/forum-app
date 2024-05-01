import mockAPI from '../../data/mockAPI';
import { addComment, addThread, getThreads } from '../../data/network-data';

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

export {
  asyncReceiveThreads,
  receiveThreadsActionCreator,
  asyncReceiveThreadDetail,
  receiveAddThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
  receiveAddCommentActionCreator
};
