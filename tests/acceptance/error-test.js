import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Error', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /garbage', function() {
  visit('/garbage');

  andThen(function() {
    equal(currentPath(), 'error', 'The currentPath should be "error"');
  });

  andThen(function() {
    equal(find('h2').text(), 'This is a standard error page.', 'The error page should display "This is a standard error page."');
  });
});
