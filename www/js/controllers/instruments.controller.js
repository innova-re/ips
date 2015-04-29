(function (define) {
    'use strict';

    define([
        '../services/instruments.service'
    ], function (instrumentsService) {

        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {

            var items,
                promise,
                searchAction;

            promise = $http.get('json/instruments.json');
            searchAction = function () {
                searchFactory.searchItem.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.instruments = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = instrumentsService.getDistinctInstruments.call(payload.data);
                $scope.instruments = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
