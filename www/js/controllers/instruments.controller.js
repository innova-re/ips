(function (define) {
    'use strict';

    define([
        '../services/instruments.service'
    ], function (instrumentsService) {

        return ['$scope', 'searchFactory', function($scope, searchFactory) {

            var items = instrumentsService.get();

            $scope.instruments = items;

            $scope.search = function() {
                searchFactory.searchServices($scope.data.search, items).then(
                    function(matches) {
                        $scope.instruments = matches;
                    }
                )
            };
        }];

    });
}(this.define));
