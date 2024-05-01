import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncReceiveLeaderboards } from '../states/leaderboards/actions';


function Leaderboards() {
  const leaderboards = useSelector((states) => states.leaderboards);
  console.log("leaderboards ",JSON.stringify(leaderboards))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  

  console.log("leaderboards ",leaderboards)

  return (
    <LeaderboardList leaderboards={leaderboards} />
  );
}

export default Leaderboards;
