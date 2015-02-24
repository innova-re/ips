(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {
        return function ($scope, $stateParams) {
            $scope.laboratories = laboratoriesService.get($stateParams.id);
        };
    });
}(this.define));
