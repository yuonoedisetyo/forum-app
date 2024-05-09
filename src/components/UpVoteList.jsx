import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function UpVoteList({ upvotes }) {
  return (
    <div style={{}}>
      <h3>Up Vote By</h3>
      <LoadingBar />
      {upvotes?.map((upVoteBy) => (
        <label htmlFor="upvoteby">{upVoteBy}</label>
      ))}
    </div>
  );
}

UpVoteList.propTypes = {
  upvotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UpVoteList;
