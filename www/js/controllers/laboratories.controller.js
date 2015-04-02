(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return ['$scope', '$stateParams', function($scope, $stateParams) {

            $scope.laboratories = laboratoriesService.get($stateParams);

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
