(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers',
                function ($scope, $stateParams, searchFactory, modalFactory, leafletBoundsHelpers) {
            scopeSharedUtil(arguments, servicesUtil.getServicesByCategoryServiceName($stateParams.name), function (values) {
                $scope.services = values;
                $scope.laboratories = servicesUtil.getLaboratoriesByServices(values);
                $scope.service_category_name = $stateParams.name;
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
            modalFactory.init($scope);
        }];
    });
}(this.define));
