import React from 'react';

class TitleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewGameInit: false,
      isHiddenPlayers: true,
    };

    this.toggleIsHiddenPlayers = this.toggleIsHiddenPlayers.bind(this);
  }

  toggleIsHiddenPlayers() {
    this.setState(prevState => ({
      isHiddenPlayers: !prevState.isHiddenPlayers,
      isNewGameInit: !prevState.isNewGameInit,
    }));
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
            <form onSubmit={this.props.onSubmit} className="form-container">
              <input type="text" placeholder="Enter player one name" value={this.props.playerOneName} minLength="1" maxLength="10" onChange={this.props.handleChangePlayerOne} />
              <input type="text" placeholder="Enter player two name" value={this.props.playerTwoName} minLength="1" maxLength="10" onChange={this.props.handleChangePlayerTwo} />
              <button className="btn btn-nice-2" type="submit"> Start </button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default TitleScreen;
