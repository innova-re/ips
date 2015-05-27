(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        'lodash'
    ], function (servicesUtil, _) {


        return ['$scope', 'searchFactory', 'serviceFactory',
                function ($scope, searchFactory, serviceFactory) {

            var items,
                searchAction,
                itemsToSearch,
                getItems;

            getItems = function (matches) {
                return _.unique(matches.map(function (object) {
                    return object.service_category_name;
                }));
            };
            searchAction = function () {
                searchFactory.searchObject.call(itemsToSearch, $scope.data.search).then(
                    function (matches) {
                        $scope.services = getItems(matches);
                    }
                );
            };
            items = servicesUtil.getDistinctServices();
            itemsToSearch = servicesUtil.getServices();
            $scope.services = items;
            $scope.search = searchAction;
        }];
    });
}(this.define));
