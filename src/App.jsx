import React from 'react';
import PropTypes from 'prop-types';
import TitleScreen from './components/TitleScreen';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: false,
    };

    this.handleGameStart = this.handleGameStart.bind(this);
  }

  handleGameStart() {
    this.setState(prevstate => ({
      gameStart: !prevstate.gameStart,
    }));
  }

  render() {
    return (
      <div>
        <div className="title-head">
          <h1>CONNECT FOUR</h1>
        </div>
        {
          !this.gameStart &&
          <TitleScreen gameStart={this.handleGameStart} />
        }
      </div>
    );
  }
}

App.propTypes = {
  gameStart: PropTypes.func.isRequired,
};

export default App;
