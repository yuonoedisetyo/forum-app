import React from 'react';
import { useSelector } from 'react-redux';
import { IconLoading } from '../../assets';

function LoadingBar({ height=150,width=150 }) {
    const loading = useSelector((states) => states.loading);

    return (
        <>
        {loading && 
        <div>
            <img src={IconLoading} style={{height,width}}/>
        </div>
        }
        </>
    );
}

export default LoadingBar;
