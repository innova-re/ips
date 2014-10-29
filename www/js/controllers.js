angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('DestinationsCtrl', function($scope, Destinations) {
  $scope.destinations = Destinations.all();
})

.controller('DestinationDetailCtrl', function($scope, $stateParams, Destinations) {
  $scope.destination = Destinations.get($stateParams.destinationId);
})

.controller('AccountCtrl', function($scope) {
});
