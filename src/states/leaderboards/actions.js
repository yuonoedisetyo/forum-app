import { getLeaderBoards } from "../../data/network-data";

function asyncReceiveLeaderboards() {
    return async (dispatch) => {
        const result = await getLeaderBoards();
        console.log("result ", result)
        if (!result?.error) {
            console.log("account asyncReceiveLeaderboards ", result)
            dispatch(leaderboardsActionCreator(result));
        }
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


