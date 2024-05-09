import PropTypes from 'prop-types';
import React from 'react';
import CommentItem from './CommentItem';
import LoadingBar from './common/LoadingBar';

function CommentsList({
  comments, commentUpVote, commentDownVote, commentNeutralVote,
}) {
  return (
    <div style={{}}>
      <h3>Comments</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}
      <LoadingBar />
      {comments?.map((comment) => (
        <CommentItem
          {...comment}
          // toggleThread={onToggleThread}
          // deleteThread={onDeleteThread}
          commentUpVote={commentUpVote}
          commentDownVote={commentDownVote}
          commentNeutralVote={commentNeutralVote}
        />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  commentUpVote: PropTypes.func.isRequired,
  commentDownVote: PropTypes.func.isRequired,
  commentNeutralVote: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CommentsList;
