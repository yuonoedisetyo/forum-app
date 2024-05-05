import { loadingBarReducer } from 'react-redux-loading-bar/build';
import { accountReducer } from './account/reducer';
import { leaderBoardsReducer } from './leaderboards/reducers';
import { loadingActionCreator } from './loading/action';
import { loadingReducer } from './loading/reducer';
import { commentsReducer, threadsReducer } from './threads/reducer';

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    threadDetail: threadsReducer(state.threadDetail, action),
    account: accountReducer(state.account, action),
    token: accountReducer(state.token, action),
    users: accountReducer(state.users, action),
    myAccount: accountReducer(state.myAccount, action),
    comments: commentsReducer(state.comments, action),
    leaderboards: leaderBoardsReducer(state.leaderboards, action),
    // loadingBar: loadingBarReducer,
    loading:loadingReducer(state.loading,action)
  };
}

export default rootReducer;
