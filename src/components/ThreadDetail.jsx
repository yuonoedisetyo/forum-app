import React from 'react';
import PropTypes from 'prop-types';

function ThreadDetail({
  title, body, createdAt, owner,
}) {
  return (
    <div style={{}}>
      <h3>My Thread Detail</h3>
      <img
        alt="avatar"
        src={owner?.avatar}
        style={{
          height: 32, width: 32, alignSelf: 'center', marginRight: 8,
        }}
      />

      <label htmlFor="name">{owner?.name}</label>
      <p>{title}</p>
      <p>{createdAt}</p>
      <p>{(body)}</p>
    </div>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadDetail;
