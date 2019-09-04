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
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.rank} {this.props.player.position}  {this.props.player.score} points(s).
            </p>
          </div>

          <div className="player__actions">
            <button className="button button--round" onClick={() => this.handleIncrement(this.props.player)}>+1</button>
            <button className="button button--round" onClick={() => this.handleDecrement(this.props.player)}>-1</button>
            <button className="button button--round" onClick={() => this.handleDelete(this.props.player)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player
