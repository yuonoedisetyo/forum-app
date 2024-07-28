function threadsReducer(threads = [], action = {}) {
  if (action.type === 'ADD_THREAD') {
    return [action.payload, ...threads];
  }

  if (action.type === 'RECEIVE_THREADS') {
    return action.payload.threads;
  }

  return threads;
}
function threadDetailReducer(threads = {}, action = {}) {
  if (action.type === 'RECEIVE_THREAD_DETAIL') {
    return action.payload.threadDetail;
  }

  if (action.type === 'THREAD_UPVOTE') {
    return {
      ...threads,
      upVotesBy: [...new Set(([...threads.upVotesBy, action.payload.userId]))],
      downVotesBy: threads.downVotesBy?.filter((element) => element !== action.payload.userId),
    };
  }
  if (action.type === 'THREAD_DOWNVOTE') {
    return {
      ...threads,
      downVotesBy: [...new Set(([...threads.downVotesBy, action.payload.userId]))],
      upVotesBy: threads.upVotesBy?.filter((element) => element !== action.payload.userId),
    };
  }
  if (action.type === 'COMMENT_UPVOTE') {
    return {
      ...threads,
      comments: threads.comments.map((obj, index) => (
        obj.id === action.payload.commentId
          ? {
            ...obj,
            upVotesBy: [...new Set((
              [...threads.comments[index].upVotesBy, action.payload.userId]))],
            downVotesBy:
            threads.comments[index].downVotesBy?.filter(
              (element) => element !== action.payload.userId,
            ),
          } : obj
      )),
    };
  }
  if (action.type === 'COMMENT_DOWNVOTE') {
    return {
      ...threads,
      comments: threads.comments.map((obj, index) => (
        obj.id === action.payload.commentId
          ? {
            ...obj,
            downVotesBy: [...new Set((
              [...threads.comments[index].downVotesBy, action.payload.userId]))],
            upVotesBy:
            threads.comments[index].upVotesBy?.filter(
              (element) => element !== action.payload.userId,
            ),
          } : obj
      )),
    };
  }

  if (action.type === 'ADD_COMMENT') {
    return { ...threads, comments: [action.payload, ...threads.comments] };
  }

  return threads;
}

export { threadsReducer, threadDetailReducer };
