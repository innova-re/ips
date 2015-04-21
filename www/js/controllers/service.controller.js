(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', '$stateParams', function ($scope, $stateParams) {

            $scope.service_category_name = $stateParams.name;
            $scope.labs = servicesService.getServicesByServiceName($stateParams.name);

        }];
    });
}(this.define));
