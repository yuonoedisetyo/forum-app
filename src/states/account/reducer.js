function accountReducer(account = null, action = {}) {
  if (action.type === 'ADD_ACCOUNT') {
    return action.payload;
  }
  if (action.type === 'RECEIVE_USERS') {
    return action.payload.users;
  }
  if (action.type === 'RECEIVE_MY_ACCOUNT') {
    // console.log("action.type ",action.type)
    // console.log("action.payload ",action.payload)
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

function tokenReducer(account = null, action = {}) {
  if (action.type === 'LOGIN') {
    return action.payload.token;
  }

  return account;
}

export { accountReducer, tokenReducer };
