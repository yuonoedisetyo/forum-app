/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import Gap from './common/Gap';
import Icon from './common/Icon';
import Content from './Content';
import DownVoteList from './DownVoteList';
import MiniProfile from './MiniProfile';
import UpVoteList from './UpVoteList';

function ThreadItem({
  id, title, body, createdAt, totalComments,
  category, onUpVote, upVotesBy,
  onDownVote, downVotesBy, type,
  owner,
  ownerId,
}) {
  const users = useSelector((states) => states.users);
  const userData = users.filter((user) => user?.id === ownerId);

  return (
    <Link to={type === 'detail' ? null : `/thread/${id}`}>
      <div className="thread-item">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <MiniProfile
            avatar={owner?.avatar || userData?.[0]?.avatar}
            name={owner?.name || userData?.[0]?.name}
          />
          <label htmlFor="category">{`#${category}`}</label>
        </div>
        <div style={{ height: 16 }} />
        <Content title={title} body={body} type={type} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ display: 'flex' }}>
            {type !== 'detail'
                && (
                  <>
                    <label htmlFor="totalcomment" style={{ fontWeight: 'bold' }}>
                      {totalComments}
                      {' '}
                      komentar
                    </label>
                    <Gap width={16} />
                  </>
                )}
            <div onClick={() => onUpVote(id)}>
              <Icon icon="like" />
            </div>
            <div style={{ width: 6 }} />
            <UpVoteList upVotes={upVotesBy} />
            <div style={{ width: 10 }} />
            <div onClick={() => onDownVote(id)}>
              <Icon icon="unlike" />
            </div>
            <div style={{ width: 6 }} />
            <DownVoteList downVotes={downVotesBy} />
            {/* <button onClick={() => commentNeutralVote(id)}>Comment Neutral Vote</button> */}
          </div>
          <label htmlFor="createat">{showFormattedDate(createdAt)}</label>
        </div>
      </div>
    </Link>
  );
}

ThreadItem.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onUpVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default ThreadItem;
