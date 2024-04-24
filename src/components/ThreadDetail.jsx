import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import parse from 'html-react-parser'

function ThreadDetail({title,body}) {
    
  return (
    <div style={{}}>
      <h3>My Thread Detail</h3>
     <p>{title}</p>
     <p>{parse(body)}</p>
    </div>
  );
}

export default ThreadDetail;
