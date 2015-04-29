(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {


        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {

            var items,
                promise,
                searchAction;

            promise = $http.get('json/services.json');
            searchAction = function () {
                searchFactory.searchItem.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.services = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = servicesService.getDistinctServices.call(payload.data);
                $scope.services = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
