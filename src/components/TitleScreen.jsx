import React from 'react';

class TitleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewGameInit: false,
      isHiddenPlayers: true,
      playerOne: '',
      playerTwo: '',
    };

    this.toggleIsHiddenPlayers = this.toggleIsHiddenPlayers.bind(this);
    this.handleChangePlayerOne = this.handleChangePlayerOne.bind(this);
    this.handleChangePlayerTwo = this.handleChangePlayerTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleIsHiddenPlayers() {
    this.setState(prevState => ({
      isHiddenPlayers: !prevState.isHiddenPlayers,
      isNewGameInit: !prevState.isNewGameInit,
    }));
  }

  handleChangePlayerOne(evt) {
    evt.preventDefault();
    const playerOneInput = evt.target.value.toUpperCase();
    this.setState({
      playerOne: playerOneInput,
    });
  }

  handleChangePlayerTwo(evt) {
    evt.preventDefault();
    const playerTwoInput = evt.target.value.toUpperCase();
    this.setState({
      playerTwo: playerTwoInput,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.gameStart();
  }

  render() {
    return (
      <div>
        <div className="new-game">
          {
            !this.state.isNewGameInit &&
            <button className="btn btn-nice-1" onClick={this.toggleIsHiddenPlayers} type="submit">
            New Game
          </button>
          }
        </div>
        <div>
          {
            !this.state.isHiddenPlayers &&
            <form onSubmit={this.handleSubmit} className="form-container">
              <input type="text" placeholder="Enter player one name..." value={this.state.playerOne} minLength="1" maxLength="10" onChange={this.handleChangePlayerOne} />
              <input type="text" placeholder="Enter player two name..." value={this.state.playerTwo} minLength="1" maxLength="10" onChange={this.handleChangePlayerTwo} />
              <button className="btn btn-nice-2" type="submit"> Start </button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default TitleScreen;
