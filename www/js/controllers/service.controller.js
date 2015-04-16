(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', '$stateParams', function ($scope, $stateParams) {

            var items = servicesService.get($stateParams.name);

            $scope.labs = items;
        }];
    });
}(this.define));
