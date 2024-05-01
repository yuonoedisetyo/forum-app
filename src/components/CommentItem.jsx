import React from 'react';
import { DummyProfil } from '../assets';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import DownVoteList from './DownVoteList';
import UpVoteList from './UpVoteList';

// {
//     "id": "comment-XhqYiuyhZm1mWHqn",
//     "content": "Halo!<br>Perkanalkan, nama saya Dimas.",
//     "createdAt": "2023-05-29T07:59:04.689Z",
//     "owner": {
//         "id": "user-mQhLzINW_w5TxxYf",
//         "name": "Dimas Saputra",
//         "avatar": "https://ui-avatars.com/api/?name=Dimas Saputra&background=random"
//     },
//     "upVotesBy": [],
//     "downVotesBy": []
// }

function CommentItem({ id,content,createdAt,upVotesBy,downVotesBy,commentUpVote,commentDownVote,commentNeutralVote }) {
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
        <button onClick={()=>commentUpVote(id)}>Comment Up Vote</button>
        <button onClick={()=>commentDownVote(id)}>Comment Down Vote</button>
        <button onClick={()=>commentNeutralVote(id)}>Comment Neutral Vote</button>
        <UpVoteList upVotes={upVotesBy}/>
        <DownVoteList downVotes={downVotesBy}/>
      </div>
    </div>
  );
}

export default CommentItem;
