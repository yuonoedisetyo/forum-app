import React from 'react';

function DownVoteList({downVotes}) {

  return (
    <div style={{}}>
      <h3>Down Vote By</h3>
        {downVotes?.map((downVote) => (
            <label>{downVote}</label>
        ))}
    </div>
  );
}

export default DownVoteList;
