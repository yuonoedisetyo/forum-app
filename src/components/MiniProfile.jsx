import PropTypes from 'prop-types';
import React from 'react';

function MiniProfile({ avatar, name }) {
  return (

    <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
      <img
        alt="avatar"
        src={avatar}
        style={{
          height: 32, width: 32, alignSelf: 'center', marginRight: 8,
        }}
      />
      <label htmlFor="name">{name}</label>
    </div>
  );
}

MiniProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MiniProfile;
