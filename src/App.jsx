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
      currentTurn: 'red',
      totalTurns: 0,
      board: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]

    };

    this.handleChangePlayerOne = this.handleChangePlayerOne.bind(this);
    this.handleChangePlayerTwo = this.handleChangePlayerTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTurnChange = this.handleTurnChange.bind(this);
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

  handleClick() {
    //fill out
  }

  handleTurnChange() {
    if (this.state.currentTurn === 'red') {
      this.setState({ 
        currentTurn: 'black',
      });
    } else {
      this.setState({
        currentTurn: 'red',
      })
    }
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
