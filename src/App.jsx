import React from 'react';
import TitleScreen from './components/TitleScreen';
import Turn from './components/Turn';
import Board from './components/Board';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleScreen: true,
      gameScreen: false,
      playerOneName: '',
      playerTwoName: '',
      currentTurn: true,
      totalTurns: 0,
      message: '',
      board: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],

    };

    this.handleChangePlayerOne = this.handleChangePlayerOne.bind(this);
    this.handleChangePlayerTwo = this.handleChangePlayerTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangePlayerOne(evt) {
    const playerOneInput = evt.target.value.charAt(0).toUpperCase() + evt.target.value.substr(1);
    this.setState({
      playerOneName: playerOneInput,
    });
    evt.preventDefault();
  }

  handleChangePlayerTwo(evt) {
    const playerTwoInput = evt.target.value.charAt(0).toUpperCase() + evt.target.value.substr(1);
    this.setState({
      playerTwoName: playerTwoInput,
    });
    evt.preventDefault();
  }

  handleSubmit(evt) {
    this.setState(prevstate => ({
      titleScreen: !prevstate.titleScreen,
      gameScreen: !prevstate.gameStart,
    }));
    evt.preventDefault();
  }

  handleClick(evt) {
    const newBoard = this.state.board.map(row => row.map(cell => cell));
    for (let i = 5; i >= 0; i--) {
      console.log([i], [evt.target.getAttribute('col')][i]);
      if (newBoard[i][evt.target.getAttribute('col')] === null) {
        if (this.state.currentTurn) {
          newBoard[i][evt.target.getAttribute('col')] = 'X';
        } else {
          newBoard[i][evt.target.getAttribute('col')] = 'O';
        }
      }
    }

    this.setState({
      board: newBoard,
      currentTurn: !this.state.currentTurn,
      totalTurns: this.state.totalTurns++
    });

    if (this.checkAllMajorDiagonals('X')) {
      this.setState({
        message: `${this.state.playerOneName} wins!`,
      });
    }

    if (this.checkWinner('X')) {
      this.setState({
        message: `${this.state.playerOneName} wins!`,
      });
    }

    if (this.checkWinner('O')) {
      this.setState({
        message: `${this.state.playerTwoName} wins!`,
      });
    }

    let boardFull = false;
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 7; k++) {
        if (this.state.board[j][k] === null) {
          boardFull = true;
        }
      }
    }

    if (!boardFull) {
      this.setState({
        message: 'Tie game, play again.'
      });
    }
  }

  checkARow(row, player) {
    let counter = 0;
    let board = this.state.board;

    for (let i = 0; i < 7; i++) {
      if (board[row][i] === player) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter === 4) {
        return true;
      }
    }
    return false;
  }

  checkAllRows(player) {
    for (let i = 0; i < 6; i++) {
      if (this.checkARow(i, player)) {
        return true;
      }
    }
    return false;
  }

  checkACol(col, player) {
    let counter = 0
    let board = this.state.board;

    for (let i = 0; i < 6 ; i++) {
      if (board[i][col] === player) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter === 4) {
        return true;
      }
    }
    return false;
  }

  checkAllCols(player) {
    for (let i = 0; i < 7; i++) {
      if (this.checkACol(i, player)) {
        return true;
      }
    }
    return false;
  }

  checkMajorDiagonal(index, player) {
    let counter = 0;
    let board = this.state.board;

    for (let i = 0; i < 5; i++) {
      if (index >= 0 && index + i < 6) {
        if (board[i][index + i] === player) {
          counter++;
        } else {
          counter = 0;
        }
        if (counter === 4) {
          return true;
        }
      } else if (index < 0 && Math.abs(index) + i < 6) {
        if (board[Math.abs(index) + i][i] === player) {
          counter++;
        } else {
          counter = 0;
        }
        if (counter === 4) {
          return true;
        }
      }
    }

    return false;
  }

  checkAllMajorDiagonals(player) {
    for (let i = -2; i < 4; i++) {
      if (this.checkMajorDiagonal(i, player)) {
        return true;
      }
    }
    return false;
  }

  checkWinner(player) {
    if (this.checkAllCols(player) ||
        this.checkAllRows(player) ||
        this.checkAllMajorDiagonals(player)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <div className="title-head">
          <h1>CONNECT FOUR</h1>
        </div>
        <div>
          {
            this.state.titleScreen &&
            <TitleScreen
              onSubmit={this.handleSubmit}
              handleChangePlayerOne={this.handleChangePlayerOne}
              handleChangePlayerTwo={this.handleChangePlayerTwo}
              playerOneName={this.state.playerOneName}
              playerTwoName={this.state.playerTwoName}
            />
          }
        </div>
        <div>
          {
            this.state.gameScreen &&
            <Turn
              playerOneName={this.state.playerOneName}
              playerTwoName={this.state.playerTwoName}
              currentTurn={this.state.currentTurn}
            />
          }
        </div>
        <div>
          {
            this.state.gameScreen &&
            <Board
              handleClick={this.handleClick}
              board={this.state.board}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
