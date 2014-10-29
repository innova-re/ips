angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Destinations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var destinations = [
    { id: 0, name: 'Polo Umanistico' },
    { id: 1, name: 'Polo Scienze Sociali' },
    { id: 2, name: 'Polo Ingegneria e Architettura' },
    { id: 3, name: 'Polo Scientifico' }
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
