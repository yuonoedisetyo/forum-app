import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label, onPress, secondary, className, type, disabled,
}) {
  return (
    <button
      className={className}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      onClick={onPress}
      style={{ backgroundColor: secondary ? null : '#03DAC6', color: secondary ? null : 'white' }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  secondary: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onPress: PropTypes.string.isRequired,
};

export default Button;