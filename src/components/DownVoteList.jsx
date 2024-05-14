import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function DownVoteList({ downVotes }) {
  return (
    <div style={{ alignContent: 'center' }}>
      {/* <h3>Down Vote By</h3> */}
      <LoadingBar />
      {downVotes?.map((downVote) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>{downVote}</label>
      ))}
      <label htmlFor="countDownvotes">{downVotes?.length || 0}</label>
    </div>
  );
}

DownVoteList.propTypes = {
  downVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DownVoteList;
