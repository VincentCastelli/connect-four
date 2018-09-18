import React from 'react';
import TitleScreen from './components/TitleScreen';
import Game from './components/Game';
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
      board: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

    };

    this.handleChangePlayerOne = this.handleChangePlayerOne.bind(this);
    this.handleChangePlayerTwo = this.handleChangePlayerTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTurnChange = this.handleTurnChange.bind(this);
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
            <Game 
              playerOneName={this.state.playerOneName}
              playerTwoName={this.state.playerTwoName}
              currentTurn={this.state.currentTurn}
              gameBoard={this.state.board}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
