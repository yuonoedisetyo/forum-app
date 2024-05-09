import PropTypes from 'prop-types';
import React from 'react';

function FilterSection({ categories, onFilter }) {
  return (
    <div style={{}}>
      <h3>Kategori</h3>
      {categories?.map((item) => (
        <button onClick={() => onFilter(item?.category)} type="button">{item?.category}</button>
      ))}
    </div>
  );
}

FilterSection.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
  })).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterSection;
