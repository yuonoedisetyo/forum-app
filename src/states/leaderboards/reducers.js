function leaderBoardsReducer(leaderboards = null, action = {}) {
    if (action.type === 'RECEIVE_LEADERBOARDS') {
        return action.payload.leaderboards;
    }

    return leaderboards;
}

export { leaderBoardsReducer };
