import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function LeaderboardList({ leaderboards }) {
  return (
    <div style={{}}>
      <h3>Users</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}
      <LoadingBar />
      {leaderboards?.map((leaderboard) => (
        <>
          <label htmlFor="name">{leaderboard?.user?.name}</label>
          <label htmlFor="skor">
            {' '}
            skor
            {leaderboard?.score}
          </label>
        </>
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default LeaderboardList;
