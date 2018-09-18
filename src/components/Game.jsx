import React from 'react';
import PropTypes from 'prop-types';

const Game = ({currentTurn, playerOneName, playerTwoName}) => {
  return (
    <h1>
      {
        currentTurn === 'red' ? `${playerOneName}'s turn` : `${playerTwoName}'s turn`
      }
    </h1>
  )
};

Game.propTypes = {
  playerOneName: PropTypes.string.isRequired,
  playerTwoName: PropTypes.string.isRequired,
  currentTurn: PropTypes.string.isRequired,
};

export default Game;
