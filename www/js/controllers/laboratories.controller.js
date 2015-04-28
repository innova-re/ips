(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {


            var items,
                promise,
                searchAction;

            promise = $http.get('json/laboratories.json');
            searchAction = function () {
                searchFactory.searchLaboratories($scope.data.search, items).then(
                    function (matches) {
                        $scope.laboratories = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = laboratoriesService.getLaboratories.call(payload.data);
                $scope.laboratories = items;
                $scope.search = searchAction;
            });
        }];
    });
}(this.define));
