import React from 'react';
import UserItem from './UserItem';

function ThreadsList({ users }) {

  return (
    <div style={{}}>
      <h3>Users</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}

      {users?.map((user) => (
        <UserItem {...user}
        // toggleThread={onToggleThread} 
        // deleteThread={onDeleteThread}
        />
      ))}
    </div>
  );
}

export default ThreadsList;
