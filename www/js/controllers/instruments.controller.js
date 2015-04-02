(function (define) {
    'use strict';

    define([
        '../services/instruments.service'
    ], function (instrumentsService) {

        return ['$scope', '$stateParams', function($scope, $stateParams) {

            $scope.instruments = instrumentsService.get($stateParams);

            // $scope.search = function() {
            //     servicesFactory.searchServices($scope.data.search).then(
            //         function(matches) {
            //             $scope.services = matches;
            //         }
            //     )
            // };
        }];

    });
}(this.define));
