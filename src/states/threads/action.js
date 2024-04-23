import mockAPI from '../../data/mockAPI';
import { getThreads } from '../../data/network-data';

function asyncReceiveThreads() {
  return async (dispatch) => {
    // const threads = await mockAPI.getTodos();
    const threads = await getThreads();
    dispatch(receiveThreadsActionCreator(threads));
  };
}


function receiveThreadsActionCreator(threads) {
    return {
      type: 'RECEIVE_THREADS',
      payload: {
        threads
      }
    };
  }

export {
  asyncReceiveThreads,
  receiveThreadsActionCreator
};
