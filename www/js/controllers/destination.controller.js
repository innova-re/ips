(function (define) {
    'use strict';

    define([
        '../services/destination.service'
    ], function (destinationService) {

        return function ($scope) {
            $scope.destinations = destinationService.all();
        };

    });
}(this.define));
