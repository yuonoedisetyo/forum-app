function accountReducer(account = null, action = {}) {
    if (action.type === 'ADD_ACCOUNT') {
      return action.payload;
    }
    if (action.type === 'LOGIN') {
      return action.payload;
    }
  
    // if (action.type === 'DELETE_TODO') {
    //   return account.filter((todo) => todo.id !== action.payload.id);
    // }
  
    // if (action.type === 'TOGGLE_TODO') {
    //   return account.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return { ...todo, complete: !todo.complete };
    //     }
  
    //     return todo;
    //   });
    // }
  
    // if (action.type === 'RECEIVE_THREADS') {
    //   return action.payload.account;
    // }
    // if (action.type === 'RECEIVE_THREAD_DETAIL') {
    //   return action.payload.threadDetail;
    // }
  
    return account;
  }
  
  export { accountReducer };
  