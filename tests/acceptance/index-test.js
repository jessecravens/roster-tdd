import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index', 'The currentPath should be "index"');
  });

  andThen(function() {
    equal(find('h2').text(), 'index.hbs', 'The index page should display "index.hbs"');
  });

});

test('navbar-brand link-to /', function() {

  visit('/');
  click('.navbar-brand');

  andThen(function() {
    equal(currentPath(), 'index', 'The navbar-brand should link to the IndexRoute');
  });
});
