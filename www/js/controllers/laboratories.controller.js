(function (define) {
    'use strict';

    define([
        '../utils/services.util'
    ], function (servicesUtil) {

        return ['$scope', 'searchFactory', 'modalFactory', function ($scope, searchFactory, modalFactory) {

            var items;
 
            modalFactory.init($scope);
            items = servicesUtil.getLaboratories();
            $scope.laboratories = items;
            $scope.search = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.laboratories = matches;
                    }
                );
            };
        }];
    });
}(this.define));
