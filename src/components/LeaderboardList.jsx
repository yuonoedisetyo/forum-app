import React from 'react';
import LoadingBar from './common/LoadingBar';

function LeaderboardList({ leaderboards }) {

    return (
        <div style={{}}>
            <h3>Users</h3>
            {/* <ThreadInput addThread={onAddThread} /> */}
            <LoadingBar/>
            {leaderboards?.map((leaderboard) => (
                <>
                    <label>{leaderboard?.user?.name}</label>
                    <label> skor{leaderboard?.score}</label>
                </>
            ))}
        </div>
    );
}

export default LeaderboardList;
