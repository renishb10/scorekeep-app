import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
  Players.insert({
    name: 'Renish',
    score: 100
  });

  console.log(Players.find().fetch())
});