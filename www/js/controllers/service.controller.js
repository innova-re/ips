(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers',
            function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {
            scopeSharedUtil(arguments, servicesUtil.getServicesByCategoryServiceName($stateParams.name), function (values) {
                $scope.services = values;
                $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                $scope.service_category_name = $stateParams.name;
                $scope.showMapButton = true;
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
            modalFactory($scope);
        }];
    });
}(this.define));
