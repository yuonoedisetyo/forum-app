import React from 'react';
import PropTypes from 'prop-types';
import { IconLike, IconUnLike } from '../../assets';

function Icon({ width, height, icon }) {
  if (icon === 'like') {
    return (
      <IconLike />
    );
  }
  if (icon === 'unlike') {
    return (
      <IconUnLike />
    );
  }
  return (
    null
  );
}

Icon.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Icon;