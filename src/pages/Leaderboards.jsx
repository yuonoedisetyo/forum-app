import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/Header';
import LeaderboardList from '../components/LeaderboardList';
import { asyncReceiveLeaderboards } from '../states/leaderboards/actions';

function Leaderboards() {
  const leaderboards = useSelector((states) => states.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        {leaderboards
          && <LeaderboardList leaderboards={leaderboards} />}
      </main>
    </>
  );
}

export default Leaderboards;
