function threadsReducer(threads = [], action = {}) {
    if (action.type === 'ADD_THREAD') {
      console.log("ADD_THREAD threads ",threads)
      return [action.payload,...threads];
    }
  
    // if (action.type === 'DELETE_TODO') {
    //   return threads.filter((todo) => todo.id !== action.payload.id);
    // }
  
    // if (action.type === 'TOGGLE_TODO') {
    //   return threads.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return { ...todo, complete: !todo.complete };
    //     }
  
    //     return todo;
    //   });
    // }
  
    if (action.type === 'RECEIVE_THREADS') {
      return action.payload.threads;
    }
    if (action.type === 'RECEIVE_THREAD_DETAIL') {
      return action.payload.threadDetail;
    }
    if (action.type === 'THREAD_UPVOTE') {
      return action.payload.upVote;
    }
  
    return threads;
  }

  const commentsReducer =(comments =[],action = {})=>{
    if (action.type === 'ADD_COMMENT') {
      return [action.payload,...comments];
    }
    return comments;
  }
  
  export { threadsReducer,commentsReducer };
  