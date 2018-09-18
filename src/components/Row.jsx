import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = (props) => (
  <div className="row" id={props.i}>
    {
      props.row.map((cell, i) => 
        <Cell cell={cell} handleClick={props.handleClick} key={i} rowId={props.i} i={i} />
      )
    }
  </div>  
)

Row.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Row;