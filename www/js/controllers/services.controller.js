(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', 'searchFactory', function($scope, searchFactory) {

            var items = servicesService.get();
            
            $scope.services = items;

            $scope.search = function() {
                searchFactory.searchServices($scope.data.search, items).then(
                    function(matches) {
                        $scope.services = matches;
                    }
                )
            };
        }];
    });
}(this.define));
