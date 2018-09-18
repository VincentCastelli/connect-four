import React from 'react';
import PropTypes from 'prop-types';

const Turn = ({ currentTurn, playerOneName, playerTwoName }) => {
  return (
    <h1 className="player-turn">
      {
        currentTurn ? `${playerOneName}'s turn` : `${playerTwoName}'s turn`
      }
    </h1>
  );
};

Turn.propTypes = {
  playerOneName: PropTypes.string.isRequired,
  playerTwoName: PropTypes.string.isRequired,
  currentTurn: PropTypes.string.isRequired,
};

export default Turn;
