(function (define) {
    'use strict';

    define([
        'lodash',
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        '../utils/scope-shared.util'
    ], function (_, servicesUtil, clusteringNoLayersUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'leafletBoundsHelpers',
            function ($scope, $stateParams, searchFactory, $state, modalFactory, leafletBoundsHelpers) {

                var key,
                    setCategories;

                key = $stateParams.key;
                setCategories = function () {

                    var obj = {},
                        category;

                    $scope.categories = [];
                    _.map($scope[key], function (value) {
                        category = value.category
                        obj[category] = (category in obj) ? obj[category] + 1 : 1;
                    });
                    Object.keys(obj).forEach(function (key) {
                        $scope.categories.push({
                            name: key,
                            occurencies: obj[key]
                        });
                    });
                };
                $scope.stateParams = $stateParams;
                $scope.template = {
                    url: '../templates/' + key + '.html'
                };
                scopeSharedUtil(arguments, servicesUtil.get(key, $stateParams.category), function (values) {

                    var searchLength = $scope.data.search.length;
                    
                    $scope[key] = (searchLength > 2) ? values : [];
                    if (searchLength > 2) {
                        setCategories()
                    }
                    if(typeof $scope.laboratories === 'undefined') {
                        $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                    }
                });
                clusteringNoLayersUtil($scope, leafletBoundsHelpers);
                modalFactory($scope);
        }];
    });
}(this.define));
