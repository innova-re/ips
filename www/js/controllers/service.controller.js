(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util'
    ], function (servicesUtil, clusteringNoLayersUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers',
                function ($scope, $stateParams, searchFactory, modalFactory, leafletBoundsHelpers) {

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
            $scope.services = items;
            $scope.service_category_name = $stateParams.name;
            $scope.search = searchAction;
            // TODO - DRY see the instrument controller
            $scope.data = {
                search: $stateParams.search
            };
            searchAction();
            modalFactory.init($scope);
            $scope.laboratories = servicesUtil.getLaboratoriesByServices($scope.services);
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
        }];
    });
}(this.define));
