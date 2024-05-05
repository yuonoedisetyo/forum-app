import React from 'react';
import LoadingBar from './common/LoadingBar';

function UpVoteList({ upvotes }) {

    return (
        <div style={{}}>
            <h3>Up Vote By</h3>
            <LoadingBar/>
            {upvotes?.map((upVoteBy) => (
                <label>{upVoteBy}</label>
            ))}
        </div>
    );
}

export default UpVoteList;
