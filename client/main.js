import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

import { Players } from '../imports/api/players';

const renderPlayers = (playerList) => {
  return playerList.map((player) => {
      return (
        <p key={player._id}>
          {player.name} has {player.score} points(s).
          <button onClick={() => handleIncrement(player)}>+1</button>
          <button onClick={() => handleDecrement(player)}>-1</button>
          <button onClick={() => handleDelete(player)}>X</button>
        </p>
      );
  });
};

const handleSubmit = (e) => {
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

const handleDelete = (player) => {
  Players.remove(player._id);
};

const handleIncrement = (player) => {
  Players.update(player._id, {$inc: {score: 1}})
};

const handleDecrement = (player) => {
  Players.update(player._id, {$inc: {score: -1}})
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Renish';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        {renderPlayers(players)}

        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('root'));
  });
})