(function (define) {
    'use strict';

    define([
        'lodash',
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util',
        '../utils/categories.util'
    ], function (_, servicesUtil, clusteringNoLayersUtil, scopeSharedUtil, categoriesUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers', function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {

            var key,
                args;

            key = $stateParams.key;
            args = [$scope, $stateParams, searchFactory, $state];
            $scope.stateParams = $stateParams;
            $scope.title = key;
            scopeSharedUtil(args, servicesUtil.get(key, $stateParams.category), function (values) {
                if ($scope.data.search.length > 2) {
                    $scope[key] = _.uniq(values, 'id');
                    categoriesUtil.setCategories($scope, key);
                }
                if (key === 'laboratories') {
                    servicesUtil.setDistance($scope.laboratories, $scope.coords);

                } else {
                    $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                    servicesUtil.setCoords($scope[key]);
                    servicesUtil.setDistance($scope[key], $scope.coords);
                }
                args = [$scope, leafletBoundsHelpers, $stateParams];
                clusteringNoLayersUtil(args);
                modalFactory($scope);
            });
        }];
    });
}(this.define));
