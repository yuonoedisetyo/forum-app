import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';
import ThreadItem from './ThreadItem';

function ThreadsList({ threads }) {
  return (
    <div style={{}}>
      <h3>My Threads</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}
      <LoadingBar />
      {threads?.map((thread) => (
        <ThreadItem {...thread} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
  })).isRequired,
};

export default ThreadsList;
