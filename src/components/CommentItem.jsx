/* eslint-disable jsx-a11y/no-static-element-interactions */
import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import DownVoteList from './DownVoteList';
import UpVoteList from './UpVoteList';
import { showFormattedDate } from '../utils';
import Icon from './common/Icon';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  commentUpVote,
  commentDownVote,
}) {
  return (
    <>
      <div className="thread-item">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
            <img
              alt="avatar"
              src={owner?.avatar}
              style={{
                height: 32, width: 32, alignSelf: 'center', marginRight: 8,
              }}
            />
            <label htmlFor="name">{owner?.name}</label>
          </div>
        </div>
        <div style={{ height: 16 }} />
        <div style={{ textAlign: 'left' }}>
          <p style={{
            // WebkitLineClamp: 4,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            lineBreak: 'anywhere',
          }}
          >
            {parse(content)}
          </p>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <div onClick={() => commentUpVote(id)} onKeyDown={() => commentUpVote(id)}>
                <Icon icon="like" />
              </div>
              <div style={{ width: 6 }} />
              <UpVoteList upVotes={upVotesBy} />
              <div style={{ width: 10 }} />
              <div onClick={() => commentDownVote(id)} onKeyDown={() => commentUpVote(id)}>
                <Icon icon="unlike" />
              </div>
              <div style={{ width: 6 }} />
              <DownVoteList downVotes={downVotesBy} />
              {/* <button onClick={() => commentNeutralVote(id)}>Comment Neutral Vote</button> */}
            </div>
            <label htmlFor="createat">{showFormattedDate(createdAt)}</label>
          </div>
        </div>
      </div>
    </>
  );
}

CommentItem.propTypes = {
  commentUpVote: PropTypes.func.isRequired,
  commentDownVote: PropTypes.func.isRequired,
  // commentNeutralVote: PropTypes.func.isRequired,
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
