(function (define) {
    'use strict';

    define([
        '../services/poli.service'
    ], function (poliService) {

        return function ($scope) {
            $scope.poli = poliService.all();
        };

    });
}(this.define));
