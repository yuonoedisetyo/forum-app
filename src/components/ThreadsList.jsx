import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadsList({threads}) {

  return (
    <div style={{}}>
      <h3>My Threads</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}

        {threads?.map((thread) => (
            <ThreadItem {...thread} 
            // toggleThread={onToggleThread} 
            // deleteThread={onDeleteThread}
             />
        ))}
    </div>
  );
}

export default ThreadsList;
