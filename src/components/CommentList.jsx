import React from 'react';
import CommentItem from './CommentItem';

function CommentsList({comments}) {

  return (
    <div style={{}}>
      <h3>Comments</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}

        {comments?.map((comment) => (
            <CommentItem {...comment} 
            // toggleThread={onToggleThread} 
            // deleteThread={onDeleteThread}
             />
        ))}
    </div>
  );
}

export default CommentsList;
