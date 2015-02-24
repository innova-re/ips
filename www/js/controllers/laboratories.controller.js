(function (define) {
    'use strict';

    define([
        '../services/poli.service'
    ], function (poliService) {

        return function ($scope, $stateParams) {
            $scope.laboratories = poliService.getLabs($stateParams.id);
        };

    });
}(this.define));
