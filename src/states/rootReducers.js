import { threadsReducer } from './threads/reducer';

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    threadDetail: threadsReducer(state.threadDetail, action),
  };
}

export default rootReducer;
