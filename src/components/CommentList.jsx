import React from 'react';
import CommentItem from './CommentItem';

function CommentsList({ comments, commentUpVote, commentDownVote, commentNeutralVote }) {
    console.log("comments ", comments)
    return (
        <div style={{}}>
            <h3>Comments</h3>
            {/* <ThreadInput addThread={onAddThread} /> */}

            {comments?.map((comment) => (
                <CommentItem {...comment}
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

export default CommentsList;
