import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function LeaderboardList({ leaderboards }) {
  return (
    <div style={{}}>
      <h3>Leaderboards</h3>
      <LoadingBar />
      {leaderboards?.map((leaderboard) => (
        <div className="thread-item" key={leaderboard?.user?.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
              <img
                alt="avatar"
                src={leaderboard?.user?.avatar}
                style={{
                  height: 32, width: 32, alignSelf: 'center', marginRight: 8,
                }}
              />
              <div>
                <label htmlFor="name">{leaderboard?.user?.name}</label>
                <br />
                <label htmlFor="name">{leaderboard?.user?.email}</label>
              </div>
            </div>
            <label htmlFor="score">{`${leaderboard?.score} skor`}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default LeaderboardList;
