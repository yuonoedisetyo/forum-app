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

              <div onClick={() => commentUpVote(id)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
                  <path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z" />
                </svg>
              </div>
              <div style={{ width: 6 }} />
              <UpVoteList upVotes={upVotesBy} />
              <div style={{ width: 10 }} />
              <div onClick={() => commentDownVote(id)}>
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

// <div style={{
//       backgroundColor: 'white', marginTop: 8, borderRadius: 12, padding: 12,
//     }}
//     >
//       <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
//         <img
//           src={owner?.avatar}
//           style={{
//             height: 32, width: 32, alignSelf: 'center', marginRight: 8,
//           }}
//         />
//         <label>{owner?.name}</label>
//       </div>
//       <div style={{ height: 8 }} />
//       <div style={{ textAlign: 'left' }}>
//         <label>{createdAt}</label>
//     <p style={{
//       WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',
//     }}
//     >
//       {parse(content)}
//     </p>
//     <button onClick={() => commentUpVote(id)}>Comment Up Vote</button>
//     <button onClick={() => commentDownVote(id)}>Comment Down Vote</button>
//     <button onClick={() => commentNeutralVote(id)}>Comment Neutral Vote</button>
//     <UpVoteList upVotes={upVotesBy} />
//     <DownVoteList downVotes={downVotesBy} />
//   </div>
//     </div > 

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
