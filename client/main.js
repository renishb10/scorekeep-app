import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

import TitleBar from '../imports/ui/components/TitleBar';
import AddPlayer from '../imports/ui/components/AddPlayer';

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
    let name = 'Renish';
    let jsx = (
      <div>
        <TitleBar title="Score Keeper"/>
        {renderPlayers(players)}
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('root'));
  });
})