import PropTypes from 'prop-types';
import React from 'react';
import Button from './common/Button';

function FilterSection({ categories, onFilter }) {
  return (
    <div>
      <h3>Kategori</h3>
      <div style={{ height: 8 }} />
      <Button className="category" secondary label="Semua Kategori" onPress={() => onFilter(null)} />
      {categories?.map((item) => (
        <Button className="category" secondary label={item?.category} onPress={() => onFilter(item?.category)} />
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
