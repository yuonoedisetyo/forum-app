import { getLeaderBoards } from "../../data/network-data";
import { hideLoading } from "../loading/action";

function asyncReceiveLeaderboards() {
    return async (dispatch) => {
        dispatch(showLoading())
        const result = await getLeaderBoards();
        console.log("result ", result)
        if (!result?.error) {
            console.log("account asyncReceiveLeaderboards ", result)
            dispatch(leaderboardsActionCreator(result));
        }
        dispatch(hideLoading())
    };
}

function leaderboardsActionCreator(leaderboards) {
    return {
        type: 'RECEIVE_LEADERBOARDS',
        payload: {
            leaderboards
        }
    };
}

export {
    asyncReceiveLeaderboards,
    leaderboardsActionCreator
}

