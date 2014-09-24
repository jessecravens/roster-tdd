import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Teams', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /teams', function() {
  visit('/teams');

  andThen(function() {
    equal(currentPath(), 'teams', 'The currentPath should be "teams"');
  });

  andThen(function() {
    equal(find('h2').text(), 'Teams', 'The settings page should display the title "Teams"');
  });

});

test('navbar teams link-to /', function() {

  visit('/');
  click('.teams-link');

  andThen(function() {
    equal(currentPath(), 'teams', 'The navbar teams link should link to the TeamsRoute');
  });
});
