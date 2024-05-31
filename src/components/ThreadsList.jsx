import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';
import ThreadItem from './ThreadItem';

function ThreadsList({ threads, onUpVote, onDownVote }) {
  return (
    <div style={{}}>
      <h3>Threads</h3>
      <div style={{ height: 8 }} />
      <LoadingBar />
      {threads?.map((thread) => (
        <ThreadItem
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          {...thread}
        />
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
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default ThreadsList;
