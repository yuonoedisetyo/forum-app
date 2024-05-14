import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';

function UpVoteList({ upvotes }) {
  return (
    <div style={{ alignContent: 'center' }}>
      {/* <h3>Up Vote By</h3> */}
      <LoadingBar />
      {upvotes?.map((upVoteBy) => (
        <label htmlFor="upvoteby">{upVoteBy}</label>
      ))}
      <label htmlFor="countUpvotes">{upvotes?.length || 0}</label>
    </div>
  );
}

UpVoteList.propTypes = {
  upvotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UpVoteList;
