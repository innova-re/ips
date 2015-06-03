(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util',
        'markercluster'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers',
        function ($scope, $stateParams, searchFactory, modalFactory, leafletBoundsHelpers) {
            scopeSharedUtil(arguments, servicesUtil.getLaboratories(), function (values) {
                $scope.laboratories = values;
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
            modalFactory.init($scope);
        }];
    });
}(this.define));
