import React from 'react';

function UpVoteList({upvotes}) {

  return (
    <div style={{}}>
      <h3>Up Vote By</h3>
        {upvotes?.map((upVoteBy) => (
            <label>{upVoteBy}</label>
        ))}
    </div>
  );
}

export default UpVoteList;
