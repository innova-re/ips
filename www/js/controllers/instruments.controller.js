(function (define) {
    'use strict';

    define([
        '../services/instruments.service'
    ], function (instrumentsService) {

        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {

            var items,
                promise,
                searchAction,
                itemsToSearch,
                getItems;

            getItems = function (matches) {
                return _.unique(matches.map(function (object) {
                    return object.instrument_category_name;
                }));
            };
            promise = $http.get('json/instruments.json');
            searchAction = function () {
                searchFactory.searchObject.call(itemsToSearch, $scope.data.search).then(
                    function (matches) {
                        $scope.instruments = getItems(matches);
                    }
                );
            };
            promise.then(function (payload) {
                items = instrumentsService.getDistinctInstruments.call(payload.data);
                itemsToSearch = payload.data;
                $scope.instruments = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
