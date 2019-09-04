import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

import { Players, calculatePlayerPositions } from '../imports/api/players';

import App from '../imports/ui/components/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({},{sort:{score: -1}}).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title="Score Keeper!" players={positionedPlayers}/>, document.getElementById('root'));
  });
})