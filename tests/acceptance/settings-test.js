import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Settings', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /settings', function() {
  visit('/settings');

  andThen(function() {
    equal(currentPath(), 'settings', 'The currentPath should be "settings"');
  });

  andThen(function() {
    equal(find('h2').text(), 'Settings', 'The settings page should display the title "Settings"');
  });

  andThen(function() {
    equal(find('ul.settings-group li').length, 5, 'The settings page should have a list of five settings');
  });

});

test('navbar settigns link-to /', function() {

  visit('/');
  click('.settings-link');

  andThen(function() {
    equal(currentPath(), 'settings', 'The navbar settings link should link to the SettingsRoute');
  });
});
