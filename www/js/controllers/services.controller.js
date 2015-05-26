(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        'json!../../json/services.json',
        'lodash'
    ], function (servicesUtil, servicesJson, _) {


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
            itemsToSearch = servicesJson;
            $scope.services = items;
            $scope.search = searchAction;
        }];
    });
}(this.define));
