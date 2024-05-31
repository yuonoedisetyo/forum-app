import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IconLoading } from '../../assets';

function LoadingBar({ height = 150, width = 150 }) {
  const loading = useSelector((states) => states.loading);

  return (
    <>
      {loading
        && (
          <div>
            <img src={IconLoading} style={{ height, width }} alt="loading ..." />
          </div>
        )}
    </>
  );
}

export default LoadingBar;

LoadingBar.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
