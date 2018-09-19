import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => (
  <div className="col" col={props.i} row={props.rowId} onClick={props.handleClick}>
    {props.cell}
  </div>
);

Cell.propTypes = {
  handleClick: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  rowId: PropTypes.number.isRequired,
};

export default Cell;
