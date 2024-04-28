import { accountReducer } from './account/reducer';
import { threadsReducer } from './threads/reducer';

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    threadDetail: threadsReducer(state.threadDetail, action),
    account: accountReducer(state.account, action),
  };
}

export default rootReducer;
