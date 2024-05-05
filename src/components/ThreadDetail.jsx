import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import parse from 'html-react-parser'

function ThreadDetail({ title, body,createdAt,owner }) {

    return (
        <div style={{}}>
            <h3>My Thread Detail</h3>
            <img src={owner?.avatar} style={{ height: 32, width: 32, alignSelf: 'center', marginRight: 8 }} />
         
            <label>{owner?.name}</label>
            <p>{title}</p>
            <p>{createdAt}</p>
            <p>{(body)}</p>
        </div>
    );
}

export default ThreadDetail;
