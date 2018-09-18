import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => (
  <div className="col" col={props.i} row={props.rowId} handleClick={(evt) => props.handleClick(evt)}>
    {props.cell}
  </div>
);

Cell.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
