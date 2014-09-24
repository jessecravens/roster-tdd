import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('error', {path: '/*wildcard'});
  this.route('settings');
  this.route('profile');
});

export default Router;
