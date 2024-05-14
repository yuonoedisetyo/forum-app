import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import parse from 'html-react-parser';

function ThreadDetail({
  title, body, createdAt, owner,category,totalComments
}) {
  return (
    <>
    <div className="thread-item">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
            <img
              alt="avatar"
              src={owner?.avatar}
              style={{
                height: 32, width: 32, alignSelf: 'center', marginRight: 8,
              }}
            />
            <label htmlFor="name">{owner?.name}</label>
          </div>
          <label htmlFor="category">{`#${category}`}</label>
        </div>
        <div style={{ height: 16 }} />
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold', lineBreak: 'anywhere' }}>{title}</label>
          <br />
          <br />
          <p style={{
            // WebkitLineClamp: 4,
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

    {/* <div style={{backgroundColor:'white',padding:16}}>
      <h3>Thread Detail</h3>
      <div style={{ height: 16 }} />
      <img
        alt="avatar"
        src={owner?.avatar}
        style={{
          height: 32, width: 32, alignSelf: 'center', marginRight: 8,
        }}
      />
      <label htmlFor="name">{owner?.name}</label>
      <div style={{ height: 16 }} />
      <p>{title}</p>
      <p>{createdAt}</p>
      <p>{(body)}</p>
    </div> */}
    </>
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
