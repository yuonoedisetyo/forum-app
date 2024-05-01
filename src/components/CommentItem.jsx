import React from 'react';
import { DummyProfil } from '../assets';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function CommentItem({ content }) {
  return (
    <div style={{ backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12 }}>
      <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex'}}>
          <img src={DummyProfil} style={{ height: 32, width: 32,alignSelf:'center',marginRight: 8 }} />
        {/* <label>{content}</label> */}
      </div>
      <div style={{ height: 8 }}></div>
      <div style={{ textAlign: 'left' }}>
        {/* <label style={{ fontWeight: 'bold' }}>{title}</label> */}
        <p style={{WebkitLineClamp:4,display:'-webkit-box',overflow:'hidden',WebkitBoxOrient:'vertical'}}>{(content)}</p>
      </div>
    </div>
  );
}

export default CommentItem;
