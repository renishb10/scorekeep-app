import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title}/>
        <PlayerList players={this.props.players}/>
        <AddPlayer />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};

export default App;