(function (define) {
    'use strict';

    define([
        '../services/services.service',
        'lodash'
    ], function (servicesService, _) {


        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {

            var items,
                promise,
                searchAction,
                itemsToSearch,
                getItems;

            getItems = function (matches) {
                return _.unique(matches.map(function (object) {
                    return object.service_category_name;
                }));
            };
            promise = $http.get('json/services.json');
            searchAction = function () {
                searchFactory.searchObject.call(itemsToSearch, $scope.data.search).then(
                    function (matches) {
                        $scope.services = getItems(matches);
                    }
                );
            };
            promise.then(function (payload) {
                items = servicesService.getDistinctServices.call(payload.data);
                itemsToSearch = payload.data;
                $scope.services = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
