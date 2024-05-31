import React from 'react';
import PropTypes from 'prop-types';

function Gap({ width, height }) {
  return (
    <div style={{ height, width }} />
  );
}

Gap.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Gap;