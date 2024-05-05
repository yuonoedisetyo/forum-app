import React from 'react';
import { DummyProfil } from '../assets';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { getUsersFromStorage } from '../data/network-data';

function ThreadItem({ id, title, body, ownerId,createdAt,totalComments }) {

  const dataUser = getUsersFromStorage();
  console.log("datauser ",dataUser)
  const dataUserFiltered = dataUser.filter((item,index)=>{
    return item?.id===ownerId
  })
  console.log("dataUserFiltered ",dataUserFiltered)

  return (
    <Link to={`/thread/${id}`}>
      <div style={{ backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12 }}>
        <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <img src={dataUserFiltered[0]?.avatar} style={{ height: 32, width: 32, alignSelf: 'center', marginRight: 8 }} />
          {/* <label>{ownerId}</label><br/> */}
          <label>{dataUserFiltered[0]?.name}</label>
        </div>
        <div style={{ height: 8 }}></div>
        <div style={{ textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold' }}>{title}</label><br/>
          <label style={{ fontWeight: 'bold' }}>{createdAt}</label>
          <p style={{ WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical' }}>{parse(body)}</p>
          <label style={{ fontWeight: 'bold' }}>{totalComments} komentar</label><br/>
        </div>
      </div>
    </Link>
  );
}

export default ThreadItem;
