(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', 'servicesFactory', function($scope, servicesFactory) {

            $scope.services = servicesService.get();

            $scope.search = function() {

                servicesFactory.searchServices($scope.data.search).then(
                    function(matches) {
                        $scope.services = matches;
                    }
                )
            }

        }];


    });
}(this.define));
