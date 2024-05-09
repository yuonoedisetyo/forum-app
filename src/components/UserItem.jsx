import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { DummyProfil } from '../assets';

function UserItem({
  id, name, email,
}) {
  return (
    <Link to={`/users/${id}`}>
      <div style={{
        backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12,
      }}
      >
        <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <img
            alt="avatar"
            src={DummyProfil}
            style={{
              height: 32, width: 32, alignSelf: 'center', marginRight: 8,
            }}
          />
          {/* <label>{avatar}</label> */}
        </div>
        <div style={{ height: 8 }} />
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>{name}</label>
          <p style={{
            WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',
          }}
          >
            {(email)}
          </p>
        </div>
      </div>
    </Link>
  );
}

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserItem;
