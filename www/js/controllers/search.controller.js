(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util',
        '../utils/categories.util'
    ], function (servicesUtil, clusteringNoLayersUtil, scopeSharedUtil, categoriesUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers', function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {

            var key = $stateParams.key;

            $scope.stateParams = $stateParams;
            $scope.template = {
                url: '../templates/' + key + '.html'
            };
            scopeSharedUtil(arguments, servicesUtil.get(key, $stateParams.category), function (values) {
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
