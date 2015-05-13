(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {

        return ['$scope', '$stateParams', 'searchFactory', '$http', function ($scope, $stateParams, searchFactory, $http) {

            var items,
                promise,
                searchAction;

            promise = $http.get('json/services.json');
            searchAction = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.services = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = servicesService.getServicesByServiceName.call(payload.data, $stateParams.name);
                $scope.service_category_name = $stateParams.name;
                $scope.services = items;
                $scope.search = searchAction;
                // TODO - DRY see the instrument controller
                $scope.data = {
                    search: $stateParams.search
                };
                searchAction();
            });
        }];
    });
}(this.define));
