import React, { Component } from 'react';
import { Players } from '../../../imports/api/players';
import PropTypes from 'prop-types';

class Player extends Component {  
  handleDelete = (player) => {
    Players.remove(player._id);
  };
  
  handleIncrement = (player) => {
    Players.update(player._id, {$inc: {score: 1}})
  };
  
  handleDecrement = (player) => {
    Players.update(player._id, {$inc: {score: -1}})
  };

  render() {
    return (
      <p>
        {this.props.player.name} has {this.props.player.score} points(s).
        <button onClick={() => this.handleIncrement(this.props.player)}>+1</button>
        <button onClick={() => this.handleDecrement(this.props.player)}>-1</button>
        <button onClick={() => this.handleDelete(this.props.player)}>X</button>
      </p>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player
