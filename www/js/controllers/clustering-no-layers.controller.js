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

            $scope.bounds = {}; // Used to prevent the TypeError: Cannot read property 'address' of undefined
            key = $stateParams.key;
            args = [$scope, $stateParams, searchFactory, $state];
            $scope.stateParams = $stateParams;
            $scope.title = key;
            scopeSharedUtil(args, servicesUtil.get(key, $stateParams.category), function (values) {
                $scope[key] = _.uniq(values, 'id');
                categoriesUtil.setCategories($scope, key);
                if (key === 'laboratories') {
                    servicesUtil.setDistance($scope.laboratories, $scope.coords);

                } else {
                    $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                    servicesUtil.setCoords($scope[key]);
                    servicesUtil.setDistance($scope[key], $scope.coords);
                }
                // TODO - try to change the logic for deciding to get macroareaNames
                // You should move this piece of code in another module map-cluster.controller.js
                if($scope.stateParams.map === '1') {
                    $scope[key] = servicesUtil.getLaboratoriesByKeys($stateParams);
                    $scope.enteNames = servicesUtil.getEnteNames();
                    $scope.provinciaNames = servicesUtil.getProvinciaNames();
                    $scope.researchLaboratories = function () {
                        $state.go('tabs.clusteringNoLayers', {
                            key: 'laboratories',
                            map: '1',
                            provinciaName: $scope.data.provinciaName,
                            enteName: $scope.data.enteName
                        });
                        $scope.modal.hide();
                    };
                }
                args = [$scope, leafletBoundsHelpers, $stateParams];
                clusteringNoLayersUtil(args);
                modalFactory($scope);
            });
        }];
    });
}(this.define));
