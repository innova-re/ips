(function (define) {
    'use strict';

    define([
        '../services/destination.service'
    ], function (destinationService) {
        return function ($scope, $stateParams) {
            $scope.destination = destinationService.get($stateParams.id);
        };
    });
}(this.define));
