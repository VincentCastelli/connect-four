import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import App from '../App';
import Row from './Row';

const Board = (props) => (
  <div>
    {
      this.props.board.map((row, i) => 
        <Row row={row} handleClick={this.props.handleClick} key={i} rowNum={i} i={i} />
      )
    }
  </div>
)

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Board;