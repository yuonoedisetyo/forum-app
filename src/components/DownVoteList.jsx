import React from 'react';
import LoadingBar from './common/LoadingBar';

function DownVoteList({ downVotes }) {

    return (
        <div style={{}}>
            <h3>Down Vote By</h3>
            <LoadingBar/>
            {downVotes?.map((downVote) => (
                <label>{downVote}</label>
            ))}
        </div>
    );
}

export default DownVoteList;
