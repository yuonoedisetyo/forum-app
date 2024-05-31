import React from 'react';
import PropTypes from 'prop-types';
import { IconLike, IconUnLike } from '../../assets';

function Icon({ icon }) {
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
  icon: PropTypes.string.isRequired,
};

export default Icon;