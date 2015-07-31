/*global window*/
(function (define) {
    'use strict';

    define([
        'lodash',
        '../utils/services.util',
        '../utils/scope-shared.util',
        '../utils/categories.util'
    ], function (_, servicesUtil, scopeSharedUtil, categoriesUtil) {

        return ['$ionicLoading', '$scope', '$stateParams', 'searchFactory', '$state', 'modalFactory', 'dataService',
            function ($ionicLoading, $scope, $stateParams, searchFactory, $state, modalFactory, dataService) {

            var key,
                args,
                promiseCallback;

            key = $stateParams.key;
            args = [$scope, $stateParams, searchFactory, $state];
            $scope.stateParams = $stateParams;
            $scope.template = {
                url: 'templates/' + key + '.html'
            };
            $scope.title = key;
            $ionicLoading.show();
            promiseCallback = function (items) {
                // TODO - change the name scopeSharedUtil
                scopeSharedUtil(args, items, function (values) {
                    $scope[key] = _.uniq(values, 'id');
                    $scope.results = $scope[key].length;
                    categoriesUtil.setCategories($scope, key);
                    if (key === 'laboratories') {
                        servicesUtil.setDistance($scope.laboratories, $scope.coords);
                    } else {
                        $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                        servicesUtil.setCoords($scope[key]);
                        servicesUtil.setDistance($scope[key], $scope.coords);
                    }
                    modalFactory($scope);
                    $ionicLoading.hide();
                });
            };
            dataService(key, $stateParams.category).then(promiseCallback);
        }];
    });
}(window.define));
