import React from 'react';
import { DummyProfil } from '../assets';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function UserItem({ id, name, email, avatar }) {
  return (
    <Link to={`/users/${id}`}>
      <div style={{ backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12 }}>
        <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <img src={DummyProfil} style={{ height: 32, width: 32, alignSelf: 'center', marginRight: 8 }} />
          {/* <label>{avatar}</label> */}
        </div>
        <div style={{ height: 8 }}></div>
        <div style={{ textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold' }}>{name}</label>
          <p style={{ WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical' }}>{(email)}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserItem;
