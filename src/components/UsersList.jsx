import React from 'react';
import LoadingBar from './common/LoadingBar';
import UserItem from './UserItem';

function ThreadsList({ users }) {

  return (
    <div style={{}}>
      <h3>Users</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}
      <LoadingBar/>
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
