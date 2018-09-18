import React from 'react'
import PropTypes from 'prop-types';

const Cell = (props) => (
  <div className="col" col={this.props.i} row={this.props.rowId} handleClick={(evt) => this.props.handleClick(evt)}>
    {this.props.square}
  </div>
)

Cell.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Cell;