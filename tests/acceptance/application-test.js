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
    equal(currentPath(), 'index', 'The current path should be index');
  });


  andThen(function() {
    equal(find('ul.nav li').length, 3, 'The index page nav bar should have 3 links');
  });


  andThen(function() {
    equal(find('ul.nav li:nth-child(1)').text(), 'Teams', 'The first link should be Teams');
  });


  andThen(function() {
    equal(find('ul.nav li:nth-child(2)').text(), 'Settings', 'The second link should be Settings');
  });


  andThen(function() {
    equal(find('ul.nav li:nth-child(3)').text(), 'Profile', 'The third link should be Profile');
  });


  andThen(function() {
    equal(find('.navbar-brand').text(), 'Roster', 'The navbar-brand should be Roster');
  });


});
