import React, { Component } from 'react';
import { Players } from '../../../imports/api/players';

export class AddPlayer extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const playerName = e.target.playerName.value;
        if (playerName) {
            Players.insert({
                name: playerName,
                score: 0
            });
            e.target.playerName.value = '';
        }
    };

    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="player name" />
                    <button className="button">Add Player</button>
                </form>
            </div>
        )
    }
}

export default AddPlayer
