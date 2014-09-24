import DS from "ember-data";

var ApplicationAdapter = DS.FixtureAdapter.extend({
  latency: 500
});

// var ApplicationAdapter = DS.RESTAdapter.extend({
//     host: 'localhost:3000'
// });

// var ApplicationAdapter = DS.RESTAdapter.extend({
//     host: window.CloudENV.APP.API_HOST,
//     namespace: 'api/v1'
// });

export default ApplicationAdapter;
