angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Destinations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var destinations = [
    // TODO - Update the right values of lat and lng for each name
    { id: 0, name: 'Polo Umanistico', lat: 39.2292587, lng: 9.1109665},
    { id: 1, name: 'Polo Scienze Sociali', lat: 39.2292587, lng: 9.1109665},
    { id: 2, name: 'Polo Ingegneria e Architettura', lat: 39.2292587, lng: 9.1109665},
    { id: 3, name: 'Polo Scientifico', lat: 39.2292587, lng: 9.1109665}
  ];

  return {
    all: function() {
      return destinations;
    },
    get: function(destinationId) {
      // Simple index lookup
      return destinations[destinationId];
    }
  }
});
