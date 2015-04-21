(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', '$stateParams', 'searchFactory', function ($scope, $stateParams, searchFactory) {

            var items = servicesService.getServicesByServiceName($stateParams.name);

            $scope.service_category_name = $stateParams.name;
            $scope.services = items;
            $scope.search = function() {
                searchFactory.searchServiceByDescrition($scope.data.search, items).then(
                    function(matches) {
                        $scope.services = matches;
                    }
                )
            };
        }];
    });
}(this.define));
