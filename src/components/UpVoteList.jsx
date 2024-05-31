import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function UpVoteList({ upVotes }) {
  return (
    <div style={{ alignContent: 'center' }}>
      {/* <h3>Up Vote By</h3> */}
      <LoadingBar />
      {/* {upVotes?.map((upVoteBy) => (
        <label htmlFor="upvoteby">{upVoteBy}</label>
      ))} */}
      <label htmlFor="countUpvotes">{upVotes?.length || 0}</label>
    </div>
  );
}

UpVoteList.propTypes = {
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UpVoteList;
