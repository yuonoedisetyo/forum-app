import PropTypes from 'prop-types';
import React from 'react';
import LoadingBar from './common/LoadingBar';
import UserItem from './UserItem';

function ThreadsList({ users }) {
  return (
    <div style={{}}>
      <h3>Users</h3>
      {/* <ThreadInput addThread={onAddThread} /> */}
      <LoadingBar />
      {users?.map((user) => (
        <UserItem {...user} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
};

export default ThreadsList;
