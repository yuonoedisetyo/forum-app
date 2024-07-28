function accountReducer(account = null, action = {}) {
  if (action.type === 'ADD_ACCOUNT') {
    return action.payload;
  }
  if (action.type === 'RECEIVE_USERS') {
    return action.payload.users;
  }
  if (action.type === 'RECEIVE_MY_ACCOUNT') {
    return action.payload;
  }

  return account;
}

function tokenReducer(account = null, action = {}) {
  if (action.type === 'LOGIN') {
    return action.payload.token;
  }

  return account;
}

export { accountReducer, tokenReducer };
