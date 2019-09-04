import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

import { Players } from '../imports/api/players';

import App from '../imports/ui/components/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    ReactDOM.render(<App title="Score Keeper!" players={players}/>, document.getElementById('root'));
  });
})