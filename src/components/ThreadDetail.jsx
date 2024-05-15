import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import DownVoteList from './DownVoteList';
import UpVoteList from './UpVoteList';

function ThreadDetail({
  title, body = '', createdAt, owner, category, totalComments, onUpVote, upVotesBy, onDownVote, downVotesBy, onNeutralVote
}) {
  console.log("upVotesBy ",upVotesBy)
  console.log("downVotesBy ",downVotesBy)
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
          <label htmlFor="category">{`#${category}`}</label>
        </div>
        <div style={{ height: 16 }} />
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold', lineBreak: 'anywhere' }}>{title}</label>
          <br />
          <br />
          <p style={{
            // WebkitLineClamp: 4,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            lineBreak: 'anywhere',
          }}
          >
            {parse(body)}
          </p>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <label htmlFor="totalcomment" style={{ fontWeight: 'bold' }}>
              {totalComments}
              {' '}
              komentar
            </label> */}
            {/* <div>
              <button type="button" onClick={onUpVote}>
                Up Vote
              </button>
              <UpVoteList upvotes={upVotesBy} />
              <button type="button" onClick={onDownVote}>
                Down Vote
              </button>
              <DownVoteList downVotes={downVotesBy} />
              <button type="button" onClick={onNeutralVote}>
                Neutral Vote
              </button>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <div onClick={onUpVote}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
                  <path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z" />
                </svg>
              </div>
              <div style={{ width: 6 }} />
              <UpVoteList upVotes={upVotesBy} />
              <div style={{ width: 10 }} />
              <div onClick={onDownVote}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
                  <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z" />
                </svg>
              </div>
              <div style={{ width: 6 }} />
              <DownVoteList downVotes={downVotesBy} />
              {/* <button onClick={() => commentNeutralVote(id)}>Comment Neutral Vote</button> */}
            </div>
            <label htmlFor="createat">{createdAt}</label>
          </div>
        </div>

      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadDetail;
