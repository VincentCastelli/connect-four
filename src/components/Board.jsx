import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Board = props => (
  <div className="board">
    {
      props.board.map((row, i) => <Row
        row={row}
        handleClick={props.handleClick}
        key={i}
        rowNum={i}
        i={i}
      />)
    }
  </div>
);

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Board;
