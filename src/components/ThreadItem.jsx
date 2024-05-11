import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getThreads } from '../data/network-data';

function ThreadItem({
  id, title, body, createdAt, totalComments, category,
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
      <div className="thread-item">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <label htmlFor="category">{`#${category}`}</label>
        </div>
        <div style={{ height: 16 }} />
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold', lineBreak: 'anywhere' }}>{title}</label>
          <br />
          <br />
          <p style={{
            WebkitLineClamp: 4,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            lineBreak: 'anywhere',
          }}
          >
            {parse(body)}
          </p>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor="totalcomment" style={{ fontWeight: 'bold' }}>
              {totalComments}
              {' '}
              komentar
            </label>
            <label htmlFor="createat">{createdAt}</label>
          </div>
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
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadItem;
