(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util',
        '../utils/categories.util'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil, categoriesUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers', function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {

            var key,
                args;

            key = $stateParams.key;
            args = [$scope, $stateParams, searchFactory, $state];
            $scope.stateParams = $stateParams;
            $scope.template = {
                url: 'templates/' + key + '.html'
            };
            // TODO - try to use instrument.name or service.name local to translate the key
            $scope.title = key;
            scopeSharedUtil(args, servicesUtil.get(key, $stateParams.category), function (values) {
                if ($scope.data.search.length > 2) {
                    $scope[key] = values;
                    $scope.results = values.length;
                    categoriesUtil.setCategories($scope, key);
                }
                if (!$scope.laboratories) {
                    $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                }
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
            modalFactory($scope);
        }];
    });
}(this.define));
