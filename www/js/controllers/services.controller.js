(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', '$stateParams', 'searchFactory', function($scope, $stateParams, searchFactory) {

            var items = servicesService.get($stateParams);
            
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
