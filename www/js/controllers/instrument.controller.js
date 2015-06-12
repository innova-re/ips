(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers',
            function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {
            scopeSharedUtil(arguments, servicesUtil.getInstrumentsByInstrumentName($stateParams.name), function (values) {
                $scope.instruments = values;
                $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                $scope.instrument_category_name = $stateParams.name;
                $scope.showMapButton = true;
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
            modalFactory($scope);
        }];
    });
}(this.define));
