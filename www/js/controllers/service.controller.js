(function (define) {
    'use strict';

    define([
        '../utils/services.util'
    ], function (servicesUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory',
                function ($scope, $stateParams, searchFactory, modalFactory) {

            var items,
                searchAction;

            searchAction = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.services = matches;
                    }
                );
            };
            items = servicesUtil.getServicesByServiceName($stateParams.name);
            $scope.service_category_name = $stateParams.name;
            $scope.services = items;
            $scope.search = searchAction;
            // TODO - DRY see the instrument controller
            $scope.data = {
                search: $stateParams.search
            };
            searchAction();
            modalFactory.init($scope);
        }];
    });
}(this.define));
