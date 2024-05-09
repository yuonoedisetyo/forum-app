/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import DownVoteList from './DownVoteList';
import UpVoteList from './UpVoteList';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  commentUpVote,
  commentDownVote,
  commentNeutralVote,
}) {
  return (
    <div style={{
      backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12,
    }}
    >
      <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
        <img
          src={owner?.avatar}
          style={{
            height: 32, width: 32, alignSelf: 'center', marginRight: 8,
          }}
        />
        <label>{owner?.name}</label>
      </div>
      <div style={{ height: 8 }} />
      <div style={{ textAlign: 'left' }}>
        <label>{createdAt}</label>
        {/* <label style={{ fontWeight: 'bold' }}>{title}</label> */}
        <p style={{
          WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',
        }}
        >
          {parse(content)}
        </p>
        <button onClick={() => commentUpVote(id)}>Comment Up Vote</button>
        <button onClick={() => commentDownVote(id)}>Comment Down Vote</button>
        <button onClick={() => commentNeutralVote(id)}>Comment Neutral Vote</button>
        <UpVoteList upVotes={upVotesBy} />
        <DownVoteList downVotes={downVotesBy} />
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  commentUpVote: PropTypes.func.isRequired,
  commentDownVote: PropTypes.func.isRequired,
  commentNeutralVote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
