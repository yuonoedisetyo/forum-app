/* eslint-disable no-use-before-define */
import { getLeaderBoards } from '../../data/network-data';
import { hideLoading, showLoading } from '../loading/action';

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    const result = await getLeaderBoards();
    if (!result?.error) {
      dispatch(leaderboardsActionCreator(result));
    }
    dispatch(hideLoading());
  };
}

function leaderboardsActionCreator(leaderboards) {
  return {
    type: 'RECEIVE_LEADERBOARDS',
    payload: {
      leaderboards,
    },
  };
}

export {
  asyncReceiveLeaderboards,
  leaderboardsActionCreator,
};
