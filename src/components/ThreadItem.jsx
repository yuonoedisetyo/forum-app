import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getThreads } from '../data/network-data';

function ThreadItem({
  id, title, body, createdAt, totalComments,
}) {
  // const dataUser = getUsersFromStorage();
  // console.log("datauser ",dataUser)
  // const dataUserFiltered = dataUser.filter((item,index)=>{
  //   return item?.id===ownerId
  // })
  // console.log("dataUserFiltered ",dataUserFiltered)
  const [threadDetail, setThreadDetail] = useState('');

  useEffect(() => {
    // dispatch(asyncReceiveThreadDetail(id));

    async function start() {
      const threadData = await getThreads(id);
      setThreadDetail(threadData);
    }
    start();
  }, []);

  return (
    <Link to={`/thread/${id}`}>
      <div style={{
        backgroundColor: 'yellow', marginTop: 8, borderRadius: 12, padding: 12,
      }}
      >
        <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <img
            alt="avatar"
            src={threadDetail?.owner?.avatar}
            style={{
              height: 32, width: 32, alignSelf: 'center', marginRight: 8,
            }}
          />
          <label htmlFor="name">{threadDetail?.owner?.name}</label>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold' }}>{title}</label>
          <br />
          <label htmlFor="createat" style={{ fontWeight: 'bold' }}>{createdAt}</label>
          <p style={{
            WebkitLineClamp: 4, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',
          }}
          >
            {parse(body)}
          </p>
          <label htmlFor="totalcomment" style={{ fontWeight: 'bold' }}>
            {totalComments}
            {' '}
            komentar
          </label>
          <br />
        </div>
      </div>
    </Link>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadItem;
