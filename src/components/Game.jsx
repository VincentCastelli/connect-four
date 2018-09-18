import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneTurn: true,
      playerTwoTurn: false,
    };

    this.handleTurnChange = this.handleTurnChange.bind(this);
  }

  handleTurnChange() {
    this.setState(prevState => ({
      playerOneTurn: !prevState.playerOneTurn,
      playerTwoTurn: !prevState.playerTwoTurn,
    }));
  }

  render() {
    return (
      <h1>
        {
          this.state.playerOneTurn &&
          `${this.props.playerOneName}'s turn` ||
          this.state.playerTwoTurn &&
          `${this.props.playerTwoName}'s turn`
        }
      </h1>
    );
  }
}

export default Game;