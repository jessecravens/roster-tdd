import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Profile', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /profile', function() {
  visit('/profile');

  andThen(function() {
    equal(currentPath(), 'profile', 'The currentPath should be "profile"');
  });

  andThen(function() {
    equal(find('h2').text(), 'Profile', 'The profile page should display the title "Profile"');
  });

});



test('navbar profile link-to /', function() {

  visit('/');
  click('.profile-link');

  andThen(function() {
    equal(currentPath(), 'profile', 'The navbar profile link should link to the ProfileRoute');
  });
});
