import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter }) => {
  let input;

  return (
    <div className={filterableTable}>
      <input
        value={filter}
        ref={(node) => {
          input = node;
        }}
        onChange={() => onFilter(input.value)}
      />

      <ProductTable filter={filter} />
    </div>
  );
};

FilterableTable.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: filterText => dispatch(filterTable(filterText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterableTable);
