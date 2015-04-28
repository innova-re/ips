(function (define) {
    'use strict';

    define([
        '../services/instruments.service'
    ], function (instrumentsService) {

        return ['$scope', '$stateParams', 'searchFactory', '$http', function ($scope, $stateParams, searchFactory, $http) {

            var items,
                promise,
                searchAction;

            promise = $http.get('json/instruments.json');
            searchAction = function () {
                searchFactory.searchIntrumentsByDescrition($scope.data.search, items).then(
                    function (matches) {
                        $scope.instruments = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = instrumentsService.getInstrumentsByInstrumentName.call(payload.data, $stateParams.name);
                $scope.instrument_category_name = $stateParams.name;
                $scope.instruments = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
