import PropTypes from 'prop-types';
import React from 'react';

function FilterSection({ categories, onFilter }) {
  return (
    <div>
      <h3>Kategori</h3>
      <div style={{ height: 8 }} />
      <button className="category" onClick={() => onFilter(null)} type="button">Semua Kategori</button>
      {categories?.map((item) => (
        <button className="category" onClick={() => onFilter(item?.category)} type="button">{item?.category}</button>
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
