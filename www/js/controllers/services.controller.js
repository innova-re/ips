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
                searchFactory.searchServices($scope.data.search, items).then(
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
