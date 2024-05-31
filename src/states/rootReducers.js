import { accountReducer, tokenReducer } from './account/reducer';
import { leaderBoardsReducer } from './leaderboards/reducers';
import { loadingReducer } from './loading/reducer';
import { commentsReducer, threadDetailReducer, threadsReducer } from './threads/reducer';

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    threadDetail: threadDetailReducer(state.threadDetail, action),
    account: accountReducer(state.account, action),
    token: tokenReducer(state.token, action),
    users: accountReducer(state.users, action),
    myAccount: accountReducer(state.myAccount, action),
    comments: commentsReducer(state.comments, action),
    leaderboards: leaderBoardsReducer(state.leaderboards, action),
    // loadingBar: loadingBarReducer,
    loading: loadingReducer(state.loading, action),
  };
}

export default rootReducer;
