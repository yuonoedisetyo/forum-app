import React from 'react';

function LeaderboardList({ leaderboards }) {

    return (
        <div style={{}}>
            <h3>Users</h3>
            {/* <ThreadInput addThread={onAddThread} /> */}

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
