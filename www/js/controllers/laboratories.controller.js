(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return ['$scope', 'searchFactory', function($scope, searchFactory) {

            var items = laboratoriesService.get();

            $scope.laboratories = items;

            $scope.search = function() {
                searchFactory.searchLaboratories($scope.data.search, items).then(
                    function(matches) {
                        $scope.laboratories = matches;
                    }
                )
            };
        }];

    });
}(this.define));
